import  { createApp } from 'vue'
import { createLifecyle, getMicroApp } from 'vite-plugin-legacy-qiankun'
import type { App as IApp, ComponentPublicInstance } from 'vue'
import './style.css'
import App from './App.vue'


const PACKAGE_NAME = 'vite-vue-app'
const microApp = getMicroApp(PACKAGE_NAME)

let app: IApp| null  = null;
let instance: ComponentPublicInstance | null  = null

function render (props?: IQianKunProps) {
  const { container, onGlobalStateChange } = props || {};
  app = createApp(App, { onGlobalStateChange })
  instance = app.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!microApp.__POWERED_BY_QIANKUN__) {
  render({});
}else{
  createLifecyle(PACKAGE_NAME, {
    bootstrap: () => {
      console.log('[vue] vue app bootstraped');
    },
    mount:  (props: IQianKunProps) => {
      console.log('[vue] props from main framework', props);
      render(props);
    },
    update:  (props) => {
      console.log('[vue] update from main framework', props);
    },
    unmount: () => {
      if(app){
        app.unmount();
        app = null
      }
      if(instance){
        instance.$el.innerHTML = '';
        instance = null;
      }
    }
  })
}






interface IQianKunProps {
  container ?: HTMLElement
  onGlobalStateChange?: ()=> void
}