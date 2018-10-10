# dva
个人理解
-------------
# Install
    
$ npm install dva-cli -g

# Create app
$ dva new myapp --no-install
进行创建app 但是不进行npm安装
$ yarn install
进行yarn安装包

# Start app 
$ cd myapp<br />
$ npm start

# Description
Services 公共调用方法与集合
routes 路由页面
models state数据
components 组件
-------------
除非有更好的理由使用混淆(mixins)，否则就使用组件类继承 React.Component
组件/引用名 使用 大驼峰式命名法
modele 文件使用小驼峰
声明 使用 数据类型 _ 小驼峰（let 常量  const 变量）





