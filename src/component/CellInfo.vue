<template>
  <div class="node-info">
    <input type="text" v-model="nodeName">
    {{nodeName}}
  </div>
</template>
<script setup>
import { ref, watch,defineEmit,getCurrentInstance } from 'vue';
const nodeName = ref('');
const emit = defineEmit(['changeNodeName'])
console.log(getCurrentInstance());
watch(nodeName, (newName) => {
  console.log(newName);
  emit('changeNodeName', newName);
});
</script>
