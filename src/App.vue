<template>
  <div class="layout">
    <NodesBar></NodesBar>
    <div id="container" class="cavs"></div>
    <NodeInfo @changeNodeName="changeNodeName"></NodeInfo>
  </div>
</template>

<script setup>
import { provide, ref, reactive, onMounted } from 'vue';
import { Graph } from '@antv/x6';
import NodesBar from './component/NodesBar.vue';
import NodeInfo from './component/NodeInfo.vue';
import registerNode from './shape/registerNode';
// @ is an alias to /src

registerNode(Graph);
// const { Dnd } = Addon;
const graph = ref({});
const curNode = ref({});
const test = reactive([
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
    // shape: 'general-node',
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
    shape: 'general-node',
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
]);
const init = () => {
  graph.value = new Graph({
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
  graph.value.fromJSON(test);
  edgeConnected();
  eventHandler();
};
const eventHandler = () => {
  graph.value.on('node:mouseenter', ({ node }) => {
    changePortsVisible(node, true);
  });
  graph.value.on('node:mouseleave', ({ node }) => {
    changePortsVisible(node, false);
  });
  // graph.value.on("selection:changed", ({ added, removed }) => {
  //   shapeSelection(added, removed);
  // });
  graph.value.on('node:selected', ({ cell, node }) => {
    console.log(node);
  });
  graph.value.on('node:unselected', ({ cell, node }) => {
    console.log(node);
  });
};
const edgeConnected = () => {
  graph.value.on('edge:connected', (args) => {
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
};
const shapeSelection = (added, removed) => {
  console.log('shape');
  added.forEach((cell) => {
    if (cell.isNode()) {
      curNode.value = cell;
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
};
const changePortsVisible = (node, visible) => {
  const ports = document.querySelectorAll(`g[data-cell-id="${node.id}"] .x6-port-body`);
  ports.forEach((port) => {
    port.style.visibility = visible ? 'visible' : 'hidden';
  });
  visible
    ? node.addTools({
        name: 'button-remove', // 工具名称
        args: { x: 0, y: 0, offset: { x: 5, y: 5 } } // 工具对应的参数
      })
    : node.removeTools('button-remove');
};
const changeNodeName = (name) => {
  // this.curNode.setProp('nodeName', name);
  curNode.value.setAttrs({ label: { text: name } });
  // this.curNode.nodeName = name;
};
onMounted(init);
provide('graph', graph);
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

