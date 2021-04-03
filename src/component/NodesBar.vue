<template>
  <div class="nodes-bar">
    <div class="rect" data-type="rect" @mousedown="startDrag">Rect</div>
    <div class="circle" data-type="circle" @mousedown="startDrag">Circle</div>
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
          shape:'custom-rect'
        });
      }
      if (type === 'circle') {
        node = this.getGraph.createNode({
          shape: 'custom-circle'
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
      console.log(JSON.stringify(this.getGraph.toJSON({diff: true}),null,2));
      // document.write(this.getGraph.toJSON().cells)
    }
  }
};
</script>
<style lang="less">
.nodes-bar {
  width: 300px;
  height: 100%;
  background: #fff;

  .rect {
    width: 100px;
    height: 50px;
    border: 2px solid skyblue;
    margin: 10px auto;
  }

  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid skyblue;
    margin: 10px auto;
  }
}
</style>
