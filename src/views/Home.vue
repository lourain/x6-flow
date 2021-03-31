<template>
  <div class="layout">
    <NodesBar></NodesBar>
    <div id="container" class="cavs"></div>
  </div>
</template>

<script>
import { Graph } from '@antv/x6';
import NodesBar from '@/component/NodesBar.vue';
import customShape from '@/shape/index';
// @ is an alias to /src

customShape(Graph);
// const { Dnd } = Addon;
export default {
  components: { NodesBar },
  data() {
    return {
      graph: null,
      data: {
        nodes: [
          {
            id: 'node1', // String，可选，节点的唯一标识
            x: 40, // Number，必选，节点位置的 x 值
            y: 40, // Number，必选，节点位置的 y 值
            shape: 'custom-node',
            label: 'hello' // String，节点标签
          },
          {
            id: 'node2', // String，节点的唯一标识
            x: 160, // Number，必选，节点位置的 x 值
            y: 180, // Number，必选，节点位置的 y 值
            shape: 'custom-node',
            label: 'world' // String，节点标签
          }
        ],
        edges: [
          {
            source: { cell: 'node1', port: 'out1' },
            target: { cell: 'node2', port: 'in1' }
          }
        ]
      },
      dnd: null
    };
  },
  provide() {
    return {
      graph: () => this.graph
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.graph = new Graph({
        container: document.getElementById('container'),
        width: 800,
        height: 600,
        background: {
          color: '#fffbe6' // 设置画布背景颜色
        },
        grid: {
          size: 10, // 网格大小 10px
          visible: true // 渲染网格背景
        },
        onPortRendered(args) {
          console.log(args);
          const container = args.contentContainer;

          if (container) {
            const div = document.createElement('div');
            div.style.background = 'red';
            div.style.width = '10px';
            div.style.height = '10px';
          }
        },
        highlighting: {
          // 当链接桩可以被链接时，在链接桩外围渲染一个 2px 宽的红色矩形框
          magnetAvailable: {
            name: 'stroke',
            args: {
              padding: 4,
              attrs: {
                'stroke-width': 4,
                stroke: 'skyblue'
              }
            }
          }
        },
        connecting: {
          snap: true,
          allowBlank: false,
          allowLoop: false,
          highlight: true,
          sourceAnchor: 'center',
          targetAnchor: 'center',
          connectionPoint: 'anchor',
          connector: 'smooth',
          createEdge() {
            return this.createEdge({
              attrs: {
                line: {
                  strokeDasharray: '5 5',
                  stroke: '#808080',
                  strokeWidth: 1,
                  targetMarker: {
                    name: 'block',
                    args: {
                      size: '6'
                    }
                  }
                }
              }
            });
          },
          validateConnection({ sourceView, targetView, sourceMagnet, targetMagnet }) {
            console.log(sourceView);
            // 只能从输出链接桩创建连接
            if (!sourceMagnet || sourceMagnet.getAttribute('port-group') === 'in') {
              return false;
            }

            // 只能连接到输入链接桩
            if (!targetMagnet || targetMagnet.getAttribute('port-group') !== 'in') {
              return false;
            }

            // 判断目标链接桩是否可连接
            const portId = targetMagnet.getAttribute('port');
            const node = targetView.cell;
            const port = node.getPort(portId);
            if (port && port.connected) {
              return false;
            }

            return true;
          }
        }
      });
      this.graph.fromJSON(this.data);
      this.edgeConnected();
      this.shapeSelection();
    },
    edgeConnected() {
      this.graph.on('edge:connected', (args) => {
        const edge = args.edge;
        const node = args.currentCell;
        const elem = args.currentMagnet;
        const portId = elem.getAttribute('port');

        console.log(edge);
        // 触发 port 重新渲染
        node.setPortProp(portId, 'connected', true);

        // 更新连线样式
        edge.attr({
          line: {
            strokeDasharray: '',
            targetMarker: 'classic'
          }
        });
      });
    },
    shapeSelection() {
      this.graph.on('selection:changed', ({ added, remove, selected }) => {
        console.log(123123);
        console.log(added);
        console.log(remove);
        console.log(selected);
      });
    }
  }
};
</script>
<style lang="less">
.layout {
  display: flex;
  width: 100%;
  height: 100vh;

  .cavs {
    width: 100%;
    height: 100%;
    border: 1px solid #000;
  }
}

.x6-node [magnet='true'] {
  cursor: crosshair;
  transition: none;
}

.x6-node [magnet='true'][port-group='in'] {
  // cursor: move;
}
</style>
