import React from 'react'
import { createRoot } from 'react-dom/client';

import './public-path'
import App from './src/App'

let root 
// 渲染你的 React 组件
function render(props) {
  const { container, onGlobalStateChange, setGlobalState } = props;
  root = createRoot(container ? container.querySelector('#root') : document.getElementById('root'));
  root.render(<App onGlobalStateChange={onGlobalStateChange} setGlobalState={setGlobalState}/>);
}


if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react] react app bootstraped');
}

export async function mount(props) {
  console.log('[react] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  root.unmount() 
}
