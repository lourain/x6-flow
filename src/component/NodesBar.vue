<template>
  <div class="nodes-bar">
    <div class="rect" data-type="rect" @mousedown="startDrag">Rect</div>
    <div class="circle" data-type="circle" @mousedown="startDrag">Circle</div>
    <div class="self-check" data-type="self-check" @mousedown="startDrag">
      <img src="../assets/star-svgrepo-com.svg" alt />
      <span>自核节点</span>
    </div>
    <div @click="exportData">export</div>
    <!--  -->
  </div>
</template>
<script>
import { Addon } from '@antv/x6';
const { Dnd } = Addon;

export default {
  inject: ['graph'],
  data() {
    return {
      dnd: null,
      container: null
    };
  },
  mounted() {
    this.container = document.getElementById('container');
  },
  computed: {
    getGraph() {
      return this.graph();
    }
  },
  watch: {
    getGraph(graph) {
      if (graph) {
        this.initDnd();
      }
    }
  },
  methods: {
    startDrag(e) {
      const target = e.currentTarget;
      const type = target.getAttribute('data-type');
      let node;
      if (type === 'rect') {
        node = this.getGraph.createNode({
          shape: 'custom-rect'
        });
      }
      if (type === 'circle') {
        node = this.getGraph.createNode({
          shape: 'custom-circle'
        });
      }
      if (type === 'self-check') {
        node = this.getGraph.createNode({
          shape: 'self-check'
        });
      }
      this.dnd.start(node, e);
    },
    initDnd() {
      this.dnd = new Dnd({
        target: this.getGraph,
        validateNode() {
          return true;
        }
      });
    },

    exportData() {
      console.log(JSON.stringify(this.getGraph.toJSON({ diff: true }), null, 2));
      // document.write(this.getGraph.toJSON().cells)
    }
  }
};
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
