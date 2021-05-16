<template>
  <div class="node-info">
    <input type="text" v-model="nodeName" />
  </div>
</template>
<script setup>
import { ref, watch, defineEmit, defineProps, toRefs } from 'vue';
const nodeName = ref('');
const props = defineProps({
  curCell: Object
});
console.log(props);
const { curCell } = toRefs(props);
watch(curCell, (cell) => {
  console.log(cell);
  if (cell.isNode()) {
    nodeName.value = cell.getAttrByPath('label/text');
  }
  if (cell.isEdge()) {
    const linAttr = cell.getLabels()[0];
    nodeName.value = linAttr ? linAttr.attrs.label.text : '';
  }
});
const emit = defineEmit(['changeNodeName']);

watch(nodeName, (newName) => {
  emit('changeNodeName', newName);
});
</script>
