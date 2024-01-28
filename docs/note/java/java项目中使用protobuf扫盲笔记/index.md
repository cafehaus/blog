# java项目中使用protobuf扫盲笔记

最近公司 Java 项目中有用到 protobuf，查了些资料还是一脸迷茫。主要纳闷这玩意到底有啥用呢？直接自己写 class、interface 不是更方便，还需要先写个 .proto 文件编译成 java 文件再来调用，这不是脱了裤子放屁吗？

> Protocal Buffers(简称protobuf)是谷歌开源的一种数据传输协议，类似于 XML、JSON 等技术，用于结构化的数据序列化、反序列化。适合高性能，对响应速度有要求的数据传输场景，生成的是字节码，二进制数据格式需要编码和解码，不具有可读性，但是比 XML、JSON 小，传输速度更快：

* protobuf：一般用于后端服务之间的数据传输(后端数据交互一般是为了序列化和反序列化，需要考虑并发、带宽这些)，不具可读性
* JSON：一般用于web项目前后端交互中，可读性好。
* XML：在WebService中广泛使用，但是过于冗余，可读性较好。

## protobuf 语法

### 常用数据类型
protobuf 类型 | java 类型    | 默认值
:------------ | :---------  | :-----
double	      | double      | 0.0
float	      | float       | 0.0
int32	      | int         | 0
int64	      | long        | 0
bool	      | boolean     | false
string        | String      | 空字符串
enum          | enum        | 第 1 个枚举值
bytes         | ByteString  | 空字节数组

### 字段限制
1、required：字段只能也必须出现 1 次，多用于必填项，必须赋值的字符
```
required int32 id = 1 [default = 0];
```

2、optional：字段可出现 0 次或多次，可有可无的字段，可以使用[default = xxx]设置默认值
```
optional string name = 1 [default = "周小黑"];
```

3、repeated：字段可出现任意多次（包括 0），多用于 Java List 属性
```
# list String
repeated string strList = 5;

# list 对象
repeated User userList = 6;
```

### 语法规则
* message：消息类型，定义属性，支持嵌套
```
message User {
    message Friend {
        required string name = 1;
        required string gender = 2 [default = "女"];
    }
    required int32 id = 1;
    required string name = 2;
    required int32 age = 3;
    repeated Friend friends = 4;
}
```
* service：用于 RPC 系统远程调用中（eg:gRPC、trpc），定义方法，protobuf 编译器会生成对应语言的服务接口代码及存根
```
message QueryRequest {
    required int32 id = 1;
}

message QueryResponse {
    required string code = 1;
    required string msg = 2;
    required User data = 3;
}

service UserService {
    // rpc关键字  函数名(参数) 返回值(返回参数)
    rpc Query(QueryRequest) returns(QueryResponse);
}
```


### protobuf 工作原理

* 首先我们需要编写一个 .protot 文件来定义序列化数据结构
* 运行 protobuf 编译器 protoc 生成对应语言的代码，如 java 会生成 .java 文件（每个消息对应一个类，同时还有一个特殊的Builder类用于创建消息接口）
* 通过 protobuf API 来读写消息

.protot 文件模板：
```
// 使用 proto3 语法，未指定则使用 proto2
syntax = "proto3";

// 生成 proto 文件所在包名
option java_package = "cn.cafe123.protobuf.proto";

// 生成 proto 文件名
option java_outer_classname="HelloProto";

message HelloRequest {
    required string name = 1;
}

message HelloResponse {
    required string message = 1;
}

service HelloWord {
    rpc Say(HelloRequest) returns (HelloResponse) {}
}
```

[protobuf 官方文档](https://protobuf.dev/overview/)