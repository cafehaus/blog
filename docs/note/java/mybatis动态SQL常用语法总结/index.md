# mybatis动态SQL常用语法总结

在 mybatis 的 xml 文件里写的 sql 语句实际用的是一门叫做 OGNL 的表达式语言，OGNL 全称 Object Graph Navigation Language 对象图导航语言，是常应用于 Java 中的一个开源的表达式语言（Expression Language），它被集成在 Spring、Mybatis、Struts2 等 Java 框架中，通过简单一致的表达式语法，可以存取对象的任意属性，调用对象的方法，遍历整个对象的结构图，实现类型转化等功能。

在书写动态 SQL 时经常需要借助各种标签，下面是一些在 mybatis 中常用的标签：

### if 标签
* 没有 else、else if 标签
* if 标签可以嵌套
* if 标签判断条件 test 中可以用 or 的，我们经常看到用 and
* 对于 number 类型，0 或者浮点型 0.00 会被当成 false(和 js 类似)
* 对于字符串类型才需要判断 != ''，其他类型直接判断 != null 就行了
* 对于空字符串 "" 会被当成 false
* 单引号内只有一个字符时，OGNL 会识别成 java 中的 char 类型，然后数据如果是 String 类型时会导致判断失效，可以直接将 test 的引号改成单引号，然后里面的字符串用双引号

if 标签的 test 中常用判断：
```
* 相等：==
* 不等：!=
* 条件或：or
* 条件与：and
* 条件非：!，也可以用 not
* 包含：in
* 不包含：not in
* 小于：<
* 小于等于：<=
* 大于：>
* 大于等于：>=
```

### choose、when、otherwise 标签
相当于 if、else if、else，间接实现了上面 if 标签不支持的 else 效果

### where 标签
用于拼接 SQL 语句中的 where 子句，条件成立时才会加上 where 关键字，可以避免拼接出多余的and、or

### set 标签
* 用于拼接SQL语句中的set子句，与 update 语句配合使用，条件成立时才会加上 set 关键字，可以避免拼接出多余的逗号，如果有多余的标签 set 标签会自动去掉
* 一定会加上 set 关键字，所以要保证至少有一个条件成立，否则会报 SQL 语法错误

```xml
<update id="updateUserInfo" parameterType="UserInfo">
    update t_user_info
    <set>
        <if test="userName != null and userName != ''">
            user_name = #{userName},
        </if>
        <if test="age != null">
            age = #{age},
        </if>
    </set>
    where user_id = #{userId}
</update>
```

### trim 标签
可以间接实现 where 和 set 标签一样的功能

### foreach 标签
遍历集合类数据，标签属性：

* collection：要被遍历解析的对象，集合名或者数组名
* item：集合或数组中每一个迭代元素的别名
* index：在 list 和数组中为元素序号，在 map 中为元素的 key=
* open：开始符号
* close：结束符号
* separator：连接每一项的分割符号

collection 接收的参数：

* 匿名参数：当在 java 方法中没有通过 @Param 注解指定参数名时，列表类型默认参数名为 list，数组为 array，注意 Map 无默认值需要自己指定具名参数
* 具名参数：java 方法中使用了 @Param 注解指定了参数名称，则 foreach 中的 collection 属性必须为指定的参数名

#### 示例1：匿名参数
```xml
<!-- mapper -->
int insertUsers(List<User> users);
int updateUsers(List<User> users);

<!-- xml -->
<insert id="insertUsers">
    insert into t_user (id, user_name, age) values
    <foreach collection="list" separator="," item="user">
        (#{user.user_id}, #{user.user_name}, #{user.age})
    </foreach>
</insert>

<update id="updateUsers">
    <foreach collection="list" separator=";" item="user">
        update t_user
        <set>
            <if test="user.userName != null and user.userName != ''">
                user_name= #{user.userName},
            </if>
            <if test="user.age != null">
                age= #{user.age},
            </if>
        </set>
        where user_id = #{user.userId}
    </foreach>
</update>
```

#### 示例2：具名参数
```xml
<!-- mapper -->
List<User> selectUsers(@Param("userIds") String[] userIds);

<!-- xml -->
<select id="selectUsers" resultType="User">
     select * from t_user where user_id in
     <foreach collection="userIds" item="item" open="(" close=")" separator=",">
        #{item}
     </foreach>
</select>
```
更多参数传递可以参考后面的 mybatis 参数章节。

### sql、include 标签
可以在 sql 标签里定义语句，然后在需要的地方用 include 标签引入进去，可以实现代码片段复用。

### selectKey 标签
用于配合插入数据成功后返回的数据，一般用来返回 id 之类的。

### mybatis 中参数传递
主要有以下 5 种传参方式：

* 匿名参数
* 具名参数，需用 @Param 注解
* List、Array、Set 参数
* Map 参数
* Java Bean 参数
* JSON 参数

#### 1、匿名参数
##### 单个简单类型参数
xml 获取的时候可以随便写，mybatis 会去自动处理，反正只有一个参数干脆就让你写啥都无所谓，不过推荐还是写个有意义的形参：

```xml
<!-- mapper -->
User getUserByUsername(String userName);

<!-- xml -->
<select id="getUserByUsername" resultType="User">
    select * from t_user where user_name = #{xxoo}
</select>
```

##### 多个简单类型参数
多个匿名参数的时候只能通过 mybatis 内置的 param1、param2 按传参顺序对应：

```xml
<!-- mapper -->
List<User> selectByuserNameAndAge(String userName, Integer age);

<!-- xml -->
<select id="selectByuserNameAndAge" resultMap="BaseResultMap" >
    select *  from t_user where user_name = #{param1} and age = #{param2}
</select>
```

#### 2、具名参数
具名参数需要用 @Param 注解来指定

```xml
<!-- mapper -->
List<User> selectByuserNameAndAge(@Param("name") String userName, @Param("age") Integer age);

<!-- xml -->
<select id="selectByuserNameAndAge" resultMap="BaseResultMap" >
    select *  from t_user where user_name = #{name} and age = #{age}
</select>
```

#### 3、List、Array、Set 参数
List 类型参数默认值 list，Array 类型参数默认值 array，注意 Set 类型的默认值并不是 set 而是 collection，除此之外的集合默认值也是 collection，当然我们也可以用 @Param 注解来自己指定

```xml
<!-- mapper -->
List<User> selectByAgeList(List ages);

<!-- xml -->
<select id="selectByList" resultMap="BaseResultMap" >
    SELECT * from t_user where age in
    <foreach collection="list" open="(" separator="," close=")" item="age">
        #{age}
    </foreach>
</select>
```

#### 4、Map 参数
使用 Map 参数时，可以直接用键名引用

```xml
Map params = new HashMap<>();
params.put("userName", "周小黑");
params.put("age", 18);
List<User> result = userMapper.selectByMapParams(params);

<!-- mapper -->
List<User> selectByMapParams(Map params);

<!-- xml -->
<select id="selectByMapParams" resultMap="BaseResultMap" parameterType="map">
  select * from t_user where user_name = #{userName} and age = #{age}
</select>
```

#### 5、Java Bean 参数
和上面的 Map 比较类似，不过这里的 parameterType 要指定为对应的 Bean 实体类型：

```xml
<!-- mapper -->
List<User> selectByBeans(User user);

<!-- xml -->
<select id="selectByBeans" resultMap="BaseResultMap" parameterType="User">
    select * from t_user where user_name = #{userName} and age = #{age}
</select>
```

#### 6、JSON 参数
和上面的 Map、Bean 参数类似，一般是直接把前端传递过来的 json 参数直接传入 Mapper 中进行查询，parameterType 为 JSONObject

```xml
<!-- mapper -->
List<User> selectByJSON(JSONObject params);

<!-- xml -->
<select id="selectByJSON" resultMap="BaseResultMap" parameterType="com.alibaba.fastjson.JSONObject">
    select * from t_user where user_name = #{userName} and age = #{age}
</select>
```

常见属性设置

* resultMap：当查询的结果需要进行复杂的映射，例如将结果映射到具有复杂关系的对象上时，resultMap允许自定义结果集的映射规则。如果 xml 文件内有使用 resultMap 标签定义好结果集数据，然后 id 属性设置为 BaseResultMap，这样需要返回的时候直接写 resultMap="BaseResultMap" 就行了，mybatis 会智能地自动给你映射过去。
* resultType: 当查询的结果可以简单地映射到一个 POJO 对象或基本数据类型/包装类时，使用resultType，MyBatis会尝试自动将结果集映射到resultType指定的类型的对象上。
* parameterType: 用于指定传入SQL语句的参数类型，MyBatis会根据parameterType的类型，将方法参数自动转换为SQL语句所需的类型

### 常用转义符
XML 文件和我们常见的 HTML 类似，都是通过标签来定义数据，而尖括号本身就是表示标签符号的开始和结束，所以在 mybatis 的 xml 文件中相关符号最好用转义符，尤其小于符号 "<"，这样可以避免解析时报错，常用转义符：

```
字符名称	  sql符号	 转义字符
大于号	      >	        &gt;
小于号	      <	        &lt;
大于等于号	  >=	    &gt;=
小于等于号	  <=	    &lt;=
单引号	      '	        &apos;
双引号	      "	        &quot;
```

### 常用 jdbcType类型对应的 Java 类型
```
jdbcType            JavaType

CHAR                String
VARCHAR             String
LONGVARCHAR         String
NUMERIC             java.math.BigDecimal
DECIMAL             java.math.BigDecimal
BOOLEAN             boolean
TINYINT             byte
SMALLINT            short
INTEGER             int
BIGINT              long
FLOAT               double
DOUBLE              double
DATE                java.sql.Date
TIME                java.sql.Time
TIMESTAMP           java.sql.Timestamp
```