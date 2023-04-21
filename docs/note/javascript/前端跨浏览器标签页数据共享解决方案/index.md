# 前端跨浏览器标签页数据共享解决方案

### 需求描述
vue 项目中有一个工单消息通知列表页，每条消息有已读和未读状态，点击消息会用 window.open 打开一个新的浏览器标签页跳转到工单列表页，工单列表页里有项操作是查看消息，会弹窗显示出具体的详细内容，进入这个弹窗就代表用户已经看到消息了，此时会去调后端接口修改消息状态为已读。

需要实现用户已读当前消息后，前面一个工单消息通知列表页的已读/未读状态同步更新。

### 想到的实现方式

* 1、直接用定时器 setInterval 不断地轮询调后端接口查最新状态
* 2、用 vuex 实现全局状态共享
* 3、用 localStorage 实现数据共享

第1种最简单，不过有点 low 直接 pass 掉了。第2种咋一看好像可以实现，实际上你去试一下就会发现问题，vuex 是不能跨标签页共享的，每一个标签页下的 vuex 实例是独立的，你修改了当前标签页下的 vuex 里数据，其他标签页是不受影响的，网上找到一个插件 vuex-shared-mutations，不过看了下最近维护还是4年以前，所以也直接 pass 了。

最后用第3种实现了，自己在 localStorage 里存一个标识，然后在需要同步数据的页面开一个 storage 的事件监听，去监听本地缓存的变化，如果是目标值发生变化，直接重新获取数据更新就可以了，具体的 demo 代码：

消息通知列表页
```vue
<template>
    <div>
        <p v-for="(item, index) in noticeList" :key="index">消息{{ index + 1 }}：{{ item.title }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            noticeList: [
                { title: '我是第一条消息' },
                { title: '我是第二条消息' },
            ]
        }
    },
    created() {
        // 跨标签页监听
        window.addEventListener('storage', this.storageChange)
    },
    beforeDestroy() {
        window.removeEventListener('storage', this.storageChange)
    },
    methods: {
        storageChange(e) {
            if (e && e.key == 'targetKey' && e.newValue) {
                // 在这里更新数据
            }
        },
    }
}
</script>
```

工单列表页
```vue
<template>
    <div>
        <p @click="handleRead">读消息</p>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        handleRead() {
            localStorage.setItem('targetKey', 1)
        },
    }
}
</script>
```

效果是实现了，最终感觉还是不太满意，在群里询问了一圈，果然有新发现，postMessage 和 BroadcastChannel 这两个浏览器的新 api 是可以实现跨标签页通信的，postMessage 还可以实现跨源通信，一般用在和 iframe 通信比较多。

### 终极版
最终尝试了 BroadcastChannel 版本：

接收消息：
```js
const BC = new BroadcastChannel('notice')
BC.onmessage = (e) => {
    console.log('消息来了：', e)
}

// 断开连接
// BC.close()
```

发送消息：
```js
const BC = new BroadcastChannel('notice')
BC.postMessage('发出消息，赶紧去更新数据吧')

// 断开连接
// BC.close()
```

### 相关文档
* [BroadcastChannel](https://developer.mozilla.org/zh-CN/docs/Web/API/BroadcastChannel)
* [postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)