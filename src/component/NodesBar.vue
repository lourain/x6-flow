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
              { group: 'right-out', id: 'out1' },
              { group: 'bottom-out', id: 'out2' }
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
              'bottom-out': {
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
              },
              'right-out': {
                position: 'right',
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
          },
          tools: [
            {
              name: 'button-remove', // 工具名称
              args: { x: 0, y: 5 } // 工具对应的参数
            }
          ]
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
          },
          ports: {
            items: [
              { group: 'in', id: 'in1' },
              { group: 'in', id: 'in2' },
              { group: 'in', id: 'in3' },
              { group: 'in', id: 'in4' }
            ],
            groups: {
              in: {
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    fill: '#fff'
                  }
                },
                position: 'ellipseSpread'
              }
            }
          },
          tools: [
            {
              name: 'button-remove', // 工具名称
              args: { x: 0, y: 5 } // 工具对应的参数
            }
          ]
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
