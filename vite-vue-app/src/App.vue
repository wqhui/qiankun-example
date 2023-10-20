<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'

const props = defineProps<{ onGlobalStateChange: Function }>()
const otherCount = ref(0)

onMounted(() => {
  if (typeof props.onGlobalStateChange === "function") {
      props.onGlobalStateChange((state:{[key:string]: any}) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log("[vue] onGlobalStateChange:" + state.reactCount)
        otherCount.value = state.reactCount
      })
    }
})

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite 4 + Vue 3" :otherCount="otherCount"/>
</template>

<style scoped>
.logo {
  height: 3em;
  padding: 1em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
