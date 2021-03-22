import React from 'react'
import styles from './index.less' //单独的样式
import {Button} from 'antd'

/*
配路由在根目录下的umirc.ts里面

这里面自动集成了antd和dayjs不用装直接引用

配置跨域和locale(语言)都在umirc.ts文件中

redux在这里面被封装了dva,使用创建一个model.ts

*/

const Index = () => {
  let index = 0
  return (
    <div>
      {/* 全局样式创建一个global.css 文件引用进来*/}
      <div className="red">
        我是全局样式
     </div>
      {/* 单独的样式 */}
      <div className={styles.blue}>我是单独的样式</div>

      {/* 我既是全局样式也是单独的样式 */}
      <div className={`a ${styles.blue}`}>我既是全局样式也是单独的样式</div>

      {/* 动态绑定class
      <div className={`${index>1?'':''}`}></div> */}

      {/* 按钮 */}
      <Button type="primary">按钮</Button>
    </div>
  )
}

export default Index
