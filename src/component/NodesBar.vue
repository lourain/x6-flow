<template>
  <ul class="nodes-bar">
    <li>
      <div class="start-node" data-type="start-node" @mousedown="startDrag"></div>
      <p>开始</p>
    </li>
    <li>
      <div class="end-node" data-type="end-node" @mousedown="startDrag"></div>
      <p>结束</p>
    </li>
    <li>
      <div class="general-node" data-type="general-node" @mousedown="startDrag"></div>
      <p>节点</p>
    </li>
    <li>
      <div class="special-node" data-type="special-node" @mousedown="startDrag"></div>
      <p>特殊节点</p>
    </li>
    <li>
      <div class="shunt-node" data-type="shunt-node" @mousedown="startDrag">
        <img src="../assets/shunt.png" alt />
      </div>
      <p>分流</p>
    </li>
    <li style="margin-top:20px;">
      <el-button @click="exportData">Export</el-button>
    </li>
  </ul>
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
  if (type === 'general-node') {
    node = graph.value.createNode({
      shape: 'general-node'
    });
  }
  if (type === 'start-node') {
    node = graph.value.createNode({
      shape: 'start-node'
    });
  }
  if (type === 'special-node') {
    node = graph.value.createNode({
      shape: 'special-node'
    });
  }
  node = graph.value.createNode({ shape: type });
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
<style lang="scss">
.nodes-bar {
  width: 200px;
  height: 100%;
  background: #fff;
  li {
    text-align: center;
    color: #666;
    font-size: 14px;
    .general-node {
      width: 80px;
      height: 40px;
      line-height: 36px;
      text-align: center;
      border: 1px solid #ff7c0e;
      border-radius: 4px;
      margin: 10px auto;
      background: url(../assets/label.png) no-repeat center / 30px;
    }

    .start-node {
      width: 40px;
      height: 40px;
      line-height: 38px;
      border-radius: 50%;
      text-align: center;
      border: 1px solid #06cc76;
      margin: 10px auto;
      background: url('../assets/start.png') no-repeat center / 20px 20px;
    }
    .end-node {
      width: 40px;
      height: 40px;
      line-height: 38px;
      border-radius: 50%;
      text-align: center;
      border: 1px solid #4440aa;
      margin: 10px auto;
      background: url('../assets/end.png') no-repeat center / 20px 20px;
    }
    .special-node {
      width: 80px;
      height: 40px;
      line-height: 36px;
      text-align: center;
      margin: 10px auto;
      border: 1px solid #f33b3d;
      border-radius: 4px;
      background: url('../assets/edit.png') no-repeat center / 20px 20px;
    }
    .shunt-node {
      width: 40px;
      height: 40px;
      line-height: 45px;
      text-align: center;
      transform: rotateZ(45deg);
      margin: 10px auto;
      border: 1px solid #3e8bf8;
      border-radius: 4px;
      img {
        transform: rotateZ(-45deg);
        width: 20px;
        height: 20px;
      }
      // background: url('../assets/edit.png') no-repeat center / 20px 20px;
    }
  }
}
</style>
