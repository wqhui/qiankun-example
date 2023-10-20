<script setup lang="ts">
import { ref } from 'vue'
import { onUpdated } from 'vue'

const props = defineProps<{ msg: string, otherCount: number }>()
const count = ref(0)
console.log(props.msg, props.otherCount)
onUpdated(()=>{
  console.log(props.msg, props.otherCount)
})

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p v-if="typeof otherCount === 'number'"> Other app count is <b>{{otherCount}}</b></p>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
