import { defineConfig } from 'umi';


export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [

    // 没有公共路由的路由 必须配在有公共路由的前面
    {
      path: '/',
      component: '@/pages/index',
      title: '首页'  //等同于meta:{title:'首页'}
    }, {
      path: '/login',
      component: '@/pages/login/Login.tsx',
      title: '登录'
    },

    //有公共路由的子路由

    {
      path: '/',
      component: '@/pages/layouts/Layouts.tsx',

      //子路由
      routes: [
        {
          path: 'user',
          component: '@/pages/user/User.tsx',
          exact: true,
          title: '用户'
        }
      ]
    }
  ],
  fastRefresh: {},

  //配置跨域
  proxy: {
    "/api": {
      ws: false,
      target: "http://localhost:7001/",
      changeOrigin: true,
      withCredentials: true,
      pathRewrite: {
        "^/api": "",
      },
    },
  },

  //配置中文
  locale:{
    default:'zh-cn'
  },

  //启动dva
  dva:{
    immer:true
  }
});
