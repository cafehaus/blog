# 用driverjs制作用户页面操作步骤引导

[driver.js](https://github.com/kamranahmedse/driver.js)
```bash
# npm i driver.js
# yarn add driver.js

import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

export default {
  data() {
    return {
      driver: null,
      steps: [
        {
          element: '.guide-1', // 对应需要显示的id获取class
          popover: {
            title: ' ',
            description: '我是第一个步骤',
            position: 'bottom'
          }
        },
        {
          element: '.guide-2',
          popover: {
            title: ' ',
            description: '我是第二步',
            position: 'bottom'
          },
          padding: 5
        }
      ]
    }
  },

  mounted() {
    setTimeout(() => {
      this.init()
    }, 0)
    // this.$nextTick(() => {
    //   this.init()
    // })
  },

  destroyed() {
    // driver.reset()
    this.driver = null
  },

  methods: {
    init() {
      this.driver = new Driver({
        className: 'driver-popover', // className to wrap driver.js popover
        animate: true, // Animate while changing highlighted element
        opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
        padding: 10, // Distance of element from around the edges
        allowClose: false, // Whether clicking on overlay should close or not
        overlayClickNext: false, // Should it move to next step on overlay click
        doneBtnText: '完成', // Text on the final button
        closeBtnText: '关闭', // Text on the close button for this step
        nextBtnText: '下一步', // Next button text for this step
        prevBtnText: '上一步', // Previous button text for this step
        onHighlightStarted: (Element) => {
          Element.node.style.pointerEvents = 'none'
        },
        onDeselected: (Element) => {
          Element.node.style.pointerEvents = 'auto'
        }
      })
      this.driver.defineSteps(this.steps)
      this.driver.start(0)
    }
  }
}
```