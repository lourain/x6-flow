<template>
  <div class="nodes-bar">
    <div class="rect" data-type="rect" @mousedown="startDrag">Rect</div>
    <div class="circle" data-type="circle" @mousedown="startDrag">Circle</div>
  </div>
</template>
<script>
import { Addon } from '@antv/x6';
const { Dnd } = Addon;

export default {
  inject: ['graph'],
  data() {
    return {
      dnd: null
    };
  },
  mounted() {},
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
      console.log(type);
      let node;
      if (type === 'rect') {
        node = this.getGraph.createNode({
          // shape: 'custom-node',
          width: 100,
          height: 40,
          attrs: {
            label: {
              text: 'Rect',
              fill: '#6a6c8a'
            },
            body: {
              stroke: '#31d0c6',
              strokeWidth: 2
            }
          },
          ports: {
            items: [
              { group: 'in', id: 'in1' },
              { group: 'in', id: 'in2' },
              { group: 'out', id: 'out1' },
              { group: 'out', id: 'out2' }
            ],
            groups: {
              in: {
                position: 'top',
                zIndex: 1,
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    fill: '#fff'
                  }
                }
              },
              out: {
                position: 'bottom',
                zIndex: 1,
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    fill: '#fff'
                  }
                }
              }
            }
          }
        });
      }
      if (type === 'circle') {
        node = this.getGraph.createNode({
          shape: 'circle',
          width: 60,
          height: 60,
          attrs: {
            label: {
              text: 'Circle'
            },
            body: {
              stroke: '#31d0c6',
              strokeWidth: 2
            }
          }
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
