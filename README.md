# simba-admin

> 基于Vue和ElementUI的后台管理模板

[预览地址](abingoal.com:3000)
## 项目结构

```
.
├── README.md                   // 说明文档
├── build                       // webpack构建配置
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
│   └── webpack.test.conf.js
├── config                      // 项目配置
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── element-variables.css       // 自定义ElementUI主题变量
├── index.html                  
├── package.json
├── src
│   ├── App.vue
│   ├── assets                  // 引用资源
│   │   └── logo.png
│   ├── components              // 组件
│   │   ├── 404.vue
│   │   ├── Dashboard.vue
│   │   ├── Login.vue
│   │   ├── System
│   │   │   └── Setting.vue
│   │   └── User
│   │       └── Profile.vue
│   ├── main.js
│   ├── mock                    // 模拟数据
│   │   ├── api.js
│   │   ├── data
│   │   │   └── user.js
│   │   ├── index.js
│   │   └── mock.js
│   └── router                  // 路由器
│       ├── index.js
│       ├── system.js
│       └── user.js
├── static                      // 静态资源
│   └── avatar
│       └── avatar.png
├── test                        // 测试
│   ├── e2e
│   └── unit
└── theme                       // ElementUI 生成主题
```

## 项目构建

``` bash
# 安装依赖
npm install

# 启用本地服务 localhost:8080
npm run dev

# 构建生产环境
npm run build

# 构建生产环境并查看报告
npm run build --report

# 运行单元测试
npm run unit

# 运行end to end (e2e)测试
npm run e2e

# 运行所有的测试实例
npm test
```

## 自定义主题

``` bash
# 项目中已经生成了主题变量文件，可直接修改
et -i 

# 修改完成后执行
et
```
> 详细的主题定制可参考[ElementUI官方文档](http://element.eleme.io/#/zh-CN/component/custom-theme)



