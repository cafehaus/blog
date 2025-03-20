# DDD四层架构个人理解和学习笔记

DDD的全称为Domain-driven Design，即领域驱动设计，从名字上就可以看出这里的核心就是Domain即领域。

### 与MVC的区别
DDD四成架构中的要素与传统三层架构还是挺相似的：

* 用户界面层UI（User Interface Layer）
* 业务逻辑层BLL（Business Logic Layer）
* 数据访问层DAL（Data Access Layer）

一个主要的变化是将业务逻辑层的服务拆分成了应用层和领域层，MVC是在三层架构的基础上设计的一种框架型架构，三层架构是一种宏观的概念，适用于任何语言，而MVC只是一种比较具体的三层架构的框架实现。

MVC三层模型是面向数据库开发，接到一个需求时先设计数据库，从数据库开始倒着往controller设计实现代码逻辑，如果一开始数据库设计不合理，后期想要改动就会很困难了。

DDD四层模型是以业务领域来划分实现具体的逻辑，就像我们的衣柜，在MVC里就是一个整体的衣柜，如果家里人员越来越多，爷爷、奶奶、大宝、二宝、三宝，那么衣柜将会越来越乱。而DDD里就会分为爸爸的衣服、妈妈的衣服、女儿的衣服，甚至每一个下面还可以再细分为女儿的T恤、女儿的裤子、女儿的配饰...DDD领域驱动设计和我们常说的面向对象编程、微服务其实很相似。

软件设计关注的应该是业务，而不是数据库！以数据库来设计软件有点本末倒置，关注数据持久化只不过是受限于物理条件限制不得已而为之，就像阿里盒马领域驱动设计实践博客中作者所说的：

> 假设你的机器内存无限大，永远不宕机，在这个前提下，我们是不需要持久化数据的，也就是我们可以不需要数据库，那么你将会怎么设计你的软件？

### 代码实现
DDD架构的四层：
* Interface层接收请求
* Application层编排请求需要的各个Domain服务（这一层尽量薄，尽量只做编排不放业务逻辑）
* Domain层根据领域来实现具体的业务逻辑操作
* Infrastructure层实现数据库操作和调用外部服务

#### 请求过程
DDD结合ProtoBuf开发接口的实现流程
* 1. Interface层将ProtoBuf协议转换成Application层的DTO
* 2. Application层将DTO转换成Domain层的entity
* 3. Domain层调用Infrastructure层时根据entity来构造Infrastructure层的DTO
* 4. Infrastructure层实现数据库操作将DTO转成DO对象，调用外部服务时则将DTO转成ProtoBuf协议

#### 响应过程
* 1. Infrastructure层实现数据库操作将DO转成DTO对象返回，调用外部服务时则将ProtoBuf协议转成DTO返回
* 2. Domain层将Infrastructure层的DTO构造成entity返回
* 3. Application层将Domain层的entity构造成DTO返回
* 4. Interface层再将Application层的DTO转换成ProtoBuf协议返回给调用方

#### 实体转换
* Assembler：属于应用层，主要作用是将一个领域对象或一组领域对象转换成一个DTO数据传输对象，或将DTO转换回领域对象
* Converter：属于基础层，其主要作用是将领域对象转换成DO数据库对象，或将DO对象转换会领域对象

### 代码实现
为了方便各层公共部分复用，实际项目中建议多分出一层common层，用来存放整个项目中各层公共依赖的部份，比如公共的enums枚举定义、contants常量定义、utils工具类这些：

```
├─interface --接口层
│  ├─XxApiImpl.java
│  └─OoApiImpl.java
│
│
├─application --应用层
│  ├─service
│  │  ├─XxApplicationService.java
│  │  ├─OoApplicationService.java
│  │  └─impl
│  │    ├─XxApplicationServiceImpl.java
│  │    └─OoApplicationServiceImpl.java
│  └─dto
│     ├─XxDTO.java
│     └─OoDTO.java
│  
│ 
├─domain --领域层
│  ├─service
│  │  ├─repository --仓储层接口
│  │  │  ├─XxRepository.java
│  │  │  └─OoRepository.java
│  │  ├─XxDomainService.java
│  │  ├─OoDomainService.java
│  │  └─impl
│  │     ├─XxDomainServiceImpl.java
│  │     └─OoDomainServiceImpl.java
│  └─entity
│     ├─XxEntity.java
│     └─OoEntity.java
│  
│ 
├─infrastructure --基础层
│  ├─repository --仓储层
│  │  ├─model --数据库DO对象
│  │  │  ├─XxDO.java
│  │  │  └─OoDO.java
│  │  ├─mapper --持久层
│  │  │  ├─XxMapper.java
│  │  │  └─OoMapper.java
│  │  └─impl
│  │    ├─XxRepositoryImpl.java
│  │    └─OoRepositoryImpl.java
│  └─dto
│     ├─XxDTO.java
│     └─OoDTO.java
│  
│
├─common --公共层
│  ├─enums --公共枚举
│  ├─constants --公共常量
│  └─utils --公共工具类
│  
```
不允许跨层调用，interface层只能调application层，application层只能调domain层，domain层只能调infrastructure层，公共层common则各层都可以调用。
