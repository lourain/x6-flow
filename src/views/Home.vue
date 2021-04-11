<template>
  <div class="layout">
    <NodesBar></NodesBar>
    <div id="container" class="cavs"></div>
    <NodeInfo @changeNodeName="changeNodeName"></NodeInfo>
  </div>
</template>

<script>
import { Graph } from '@antv/x6';
import NodesBar from '@/component/NodesBar.vue';
import NodeInfo from '@/component/NodeInfo.vue';
import registerNode from '@/shape/registerNode';
// @ is an alias to /src

registerNode(Graph);
// const { Dnd } = Addon;
export default {
  components: { NodesBar, NodeInfo },
  data() {
    return {
      graph: null,
      data: {
        nodes: [
          {
            id: 'node1', // String，可选，节点的唯一标识
            x: 40, // Number，必选，节点位置的 x 值
            y: 40, // Number，必选，节点位置的 y 值
            width: 100,
            height: 40,
            shape: 'custom-rect',
            label: 'hello' // String，节点标签
          },
          {
            id: 'node2', // String，节点的唯一标识
            x: 160, // Number，必选，节点位置的 x 值
            y: 180, // Number，必选，节点位置的 y 值
            width: 100,
            height: 40,
            shape: 'custom-rect',
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
      test: [
        {
          position: {
            x: 40,
            y: 40
          },
          attrs: {
            text: {
              text: 'hello'
            }
          },
          // shape: 'custom-rect',
          shape: 'self-check',
          id: 'node1',
          zIndex: 100
        },
        {
          position: {
            x: 160,
            y: 180
          },
          attrs: {
            text: {
              text: 'world'
            }
          },
          shape: 'custom-rect',
          id: 'node2',
          zIndex: 100
        },
        {
          shape: 'edge',
          id: '6a507852-8c75-476c-8426-6be3095210ac',
          source: {
            cell: 'node1',
            port: 'out1'
          },
          target: {
            cell: 'node2',
            port: 'in1'
          },
          zIndex: 1
        },
        {
          position: {
            x: 50,
            y: 380
          },
          shape: 'custom-circle',
          id: '01d7e44a-6f4c-4b41-959e-6fcd78b0fef6',
          zIndex: 100
        }
      ],
      dnd: null,
      curNode:null,
    };
  },
  provide() {
    return {
      graph: () => this.graph
    };
  },
  mounted() {
    this.init();
    // this.graph.addNode(new MyRect().position(100,100));
  },
  methods: {
    init() {
      this.graph = new Graph({
        container: document.getElementById('container'),
        width: 800,
        height: 600,
        selecting: true, // 点选/框选，默认禁用。
        background: {
          color: '#fffbe6' // 设置画布背景颜色
        },
        grid: {
          size: 10, // 网格大小 10px
          visible: true // 渲染网格背景
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
          },
          magnetAdsorbed: {
            name: 'stroke',
            args: {
              padding: 4,
              attrs: {
                'stroke-width': 8,
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
          sourceAnchor: {
            name: 'center'
          },
          targetAnchor: 'center',
          connectionPoint: 'anchor',
          // connector: 'smooth',
          router: 'manhattan',
          validateMagnet({ magnet }) {
            return magnet.getAttribute('port-group') !== 'in';
          },
          createEdge() {
            return this.createEdge({
              zIndex: -1,
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
          validateConnection({ targetView, sourceMagnet, targetMagnet }) {
            // 只能从输出链接桩创建连接
            // if (!sourceMagnet || sourceMagnet.getAttribute('port-group') === 'in') {
            //   return false;
            // }

            // // 只能连接到输入链接桩
            // if (!targetMagnet || targetMagnet.getAttribute('port-group') !== 'in') {
            //   return false;
            // }
            if (!sourceMagnet || !targetMagnet) {
              return false;
            }

            // 判断目标链接桩是否可连接
            const portId = targetMagnet.getAttribute('port');
            const node = targetView.cell;
            const port = node.getPort(portId);
            if (!port) {
              return false;
            }

            return true;
          }
        }
      });
      // this.graph.fromJSON(this.data);
      this.graph.fromJSON(this.test);
      this.edgeConnected();
      this.eventHandler();
    },
    eventHandler() {
      this.graph.on('node:mouseenter', ({ node }) => {
        this.changePortsVisible(node, true);
      });
      this.graph.on('node:mouseleave', ({ node }) => {
        this.changePortsVisible(node, false);
      });
      this.graph.on('selection:changed', ({ added, removed }) => {
        this.shapeSelection(added, removed);
      });
    },
    edgeConnected() {
      this.graph.on('edge:connected', (args) => {
        const edge = args.edge;
        const node = args.currentCell;
        const elem = args.currentMagnet;
        const portId = elem.getAttribute('port');

        // 触发 port 重新渲染
        node.setPortProp(portId, 'connected', true);
        edge.zIndex = -1;
        // 更新连线样式
        edge.attr({
          line: {
            strokeDasharray: '',
            targetMarker: 'classic'
          }
        });
        // edge.appendLabel({
        //   attrs: {
        //     text: {
        //       text: 'Hello Label'
        //     }
        //   }
        // });
      });
    },
    shapeSelection(added, removed) {
      console.log('shape');
      added.forEach((cell) => {
        if (cell.isNode()) {
          this.curNode = cell
          cell.attr('body', {
            fill: '#ffd591',
            stroke: '#ffa940'
          });
          cell.getPorts().forEach(({ id }) => {
            cell.setPortProp(id, 'attrs/circle', { stroke: '#ffa940' });
          });
        }
        if (cell.isEdge()) {
          cell.attr('line', { stroke: '#ffa940' });
          cell.addTools({
            name: 'button-remove',
            args: {
              distance: '50%'
            }
          });
        }
      });
      removed.forEach((cell) => {
        if (cell.isNode()) {
          cell.attr('body', {
            fill: '#fff',
            stroke: '#31d0c6'
          });
          cell.getPorts().forEach(({ id }) => {
            cell.setPortProp(id, 'attrs/circle', { stroke: '#31d0c6' });
          });
        }
        if (cell.isEdge()) {
          cell.attr('line', { stroke: '#000' });
          cell.removeTools();
        }
      });
    },
    changePortsVisible(node, visible) {
      const ports = document.querySelectorAll(`g[data-cell-id="${node.id}"] .x6-port-body`);
      ports.forEach((port) => {
        port.style.visibility = visible ? 'visible' : 'hidden';
      });
    },
    changeNodeName(name) {
    // this.curNode.setProp('nodeName', name);
    this.curNode.setAttrs({ label: { text: name } });
    // this.curNode.nodeName = name;
  },

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

.x6-node {
  [magnet='true'] {
    cursor: crosshair;
    transition: none;

    &[port-group='in'] {
      cursor: move;
    }
  }

  .x6-port-body {
    visibility: hidden;
  }
}
</style>

