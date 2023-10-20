import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { registerMicroApps, start, initGlobalState, MicroAppStateActions } from 'qiankun';
import './index.css'

// 初始化 state
const globalStateActions: MicroAppStateActions = initGlobalState({count: 0, reactCount: 0});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App globalStateActions={globalStateActions}/>
  </React.StrictMode>,
)



registerMicroApps([
  {
    name: 'vueApp',
    entry: '//localhost:8888',
    container: '#vue-container',
    activeRule: ['/home', '/vue-app'],
  },
  {
    name: 'reactApp',
    entry: '//localhost:7777',
    container: '#react-container',
    activeRule: ['/home', '/react-app'],
  }
]);
// 启动 qiankun
start({
  singular: false,
  sandbox: { strictStyleIsolation: true }
});


