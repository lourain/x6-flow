<template>
  <div class="nodes-bar">
    <div class="rect" data-type="rect" @mousedown="startDrag">Rect</div>
    <div class="circle" data-type="circle" @mousedown="startDrag">Circle</div>
    <div class="self-check" data-type="self-check" @mousedown="startDrag">
      <img src="../assets/star-svgrepo-com.svg" alt />
      <span>自核节点</span>
    </div>
    <button @click="exportData">export</button>
  </div>
</template>
<script setup>
import { inject, ref, watch } from 'vue';
import { Addon } from '@antv/x6';
const { Dnd } = Addon;

const graph = inject('graph');
const dnd = ref({});
const startDrag = (e) => {
  const target = e.currentTarget;
  const type = target.getAttribute('data-type');
  let node;
  if (type === 'rect') {
    node = graph.value.createNode({
      shape: 'general-node'
    });
  }
  if (type === 'circle') {
    node = graph.value.createNode({
      shape: 'custom-circle'
    });
  }
  if (type === 'self-check') {
    node = graph.value.createNode({
      shape: 'self-check'
    });
  }
  dnd.value.start(node, e);
};
const initDnd = () => {
  dnd.value = new Dnd({
    target: graph.value,
    validateNode() {
      return true;
    }
  });
};

const exportData = () => {
  console.log(JSON.stringify(graph.value.toJSON({ diff: true }), null, 2));
  // document.write(this.getGraph.toJSON().cells)
};
watch(graph, (val) => {
  console.log(val);
  initDnd();
});
</script>
<style lang="less">
.nodes-bar {
  width: 200px;
  height: 100%;
  background: #fff;

  .rect {
    width: 100px;
    height: 40px;
    line-height: 36px;
    text-align: center;
    border: 2px solid skyblue;
    margin: 10px auto;
  }

  .circle {
    width: 60px;
    height: 60px;
    line-height: 56px;
    border-radius: 50%;
    text-align: center;
    border: 2px solid skyblue;
    margin: 10px auto;
  }

  .self-check {
    position: relative;
    width: 100px;
    height: 40px;
    line-height: 38px;
    text-align: center;
    margin: 10px auto;
    border: 2px solid skyblue;

    img {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
