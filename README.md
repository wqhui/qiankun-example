## ✨ 说明
一个简单的 [qiankun](https://github.com/umijs/qiankun/) 最小可运行Demo，功能包含父子项目之间、子项目之间数据传输。
- 主应用使用 `Vite4 + React18`
- 子应用一使用`Webpack 5 + React 18`
- 子应用二使用`Vite 4 + Vue 3`。
- `Vite`兼容使用 [vite-plugin-legacy-qiankun](https://github.com/lishaobos/vite-plugin-legacy-qiankun)。


## 📖 使用

### 运行
```shell
  yarn #安装包
  yarn install #安装所有子项目的依赖项
  yarn dev #开发模式启动项目
  #or
  yarn preview #预览生产包模式启动项目
```

### CLI
`yarn install`: 安装所有子项目的依赖项

`yarn dev`: 开发模式启动项目，启动成功后访问`http://127.0.0.1:9999/home`查看效果

`yarn preview`: 预览生产包模式启动项目，启动成功后访问`http://127.0.0.1:9999/home`查看效果




