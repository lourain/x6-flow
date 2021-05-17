<template>
  <div class="node-info">
    <section v-show="cellType">
      <h3>{{cellType}}</h3>
      <div>
        <p>标题：</p>
        <el-input type="text" v-model="cellInfo.cellName" />
      </div>
      <div>
        <p>信息：</p>
        <el-input :autosize="{ minRows: 4, maxRows: 8}" type="textarea" v-model="cellInfo.cellDesc"></el-input>
      </div>
      <div v-show="isSpecialNode">
        <p>脚本:</p>
        <el-input :autosize="{ minRows: 4, maxRows: 8}" type="textarea" v-model="cellInfo.cellScript"></el-input>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, watch, defineEmit, defineProps, toRefs, reactive } from 'vue';
const props = defineProps({
  curCell: Object
});
const cellType = ref('');
const cellInfo = reactive({ cellName: '', cellDesc: '', cellScript: '' });
const { curCell } = toRefs(props);
const isSpecialNode = ref(false);
const emit = defineEmit(['changeNodeName']);

toRefs(cellInfo);

watch(curCell, (cell) => {
  if (!cell) {
    cellType.value = '';
    return;
  }
  if (cell.isNode()) {
    cellType.value = '节点';
    console.log(cell.shape);
    cell.shape === 'special-node' ? (isSpecialNode.value = true) : (isSpecialNode.value = false);
    cellInfo.cellName = cell.getAttrByPath('label/text');
  }
  if (cell.isEdge()) {
    cellType.value = '线';
    const linAttr = cell.getLabels()[0];
    cellInfo.cellName = linAttr ? linAttr.attrs.label.text : '';
  }
});

watch(
  () => cellInfo.cellName,
  (newName) => {
    emit('changeNodeName', newName);
  }
);
</script>
<style lang="scss">
.node-info {
  padding: 10px;
  width: 20%;
  min-width: 250px;
  background: #d6d9da5d;
  border: 1px solid #000;
  margin-left: 10px;
  // box-shadow: #ccc 0 0 20px;
  section {
    h3 {
      border-bottom: 1px solid #ccc;
    }
    & > div {
      margin-top: 14px;
    }
  }
}
</style>
