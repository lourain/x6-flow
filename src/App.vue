<template>
  <div class="layout">
    <NodesBar></NodesBar>
    <div id="container" class="cavs"></div>
    <CellInfo @changeNodeName="changeNodeName" :cur-cell="curCell"></CellInfo>
  </div>
</template>

<script setup>
import { provide, ref, reactive, onMounted } from 'vue';
import { Graph } from '@antv/x6';
import NodesBar from './component/NodesBar.vue';
import CellInfo from './component/CellInfo.vue';
import registerNode from './shape/registerNode';
import cellHover from './composables/cellHover';
import cellSelect from './composables/cellSelect';
import connectEdge from './composables/connectEdge';
import blankEvent from './composables/blankEvent';

registerNode(Graph);
const graph = ref({});
const curCell = ref({});
// console.log(node);
const test = reactive([
  {
    shape: 'edge',
    attrs: {
      line: {
        stroke: '#808080',
        strokeWidth: 1,
        strokeDasharray: ''
      }
    },
    id: 'bf8d1c70-857d-41bb-8271-280a3a104824',
    zIndex: -1,
    source: {
      cell: '32f1b845-9232-4051-b742-8bbf1c7d23a1',
      port: 'p_bottom'
    },
    target: {
      cell: 'a4288f97-97c1-4bcd-8c28-fcd9a94f056b',
      port: 'p_top'
    }
  },
  {
    shape: 'edge',
    attrs: {
      line: {
        stroke: '#808080',
        strokeWidth: 1,
        strokeDasharray: ''
      }
    },
    id: 'f4ce3de8-c388-41ee-9833-ef6e1f1dba2a',
    zIndex: -1,
    source: {
      cell: 'a4288f97-97c1-4bcd-8c28-fcd9a94f056b',
      port: 'p_bottom'
    },
    target: {
      cell: '4291dc4c-c346-4727-895b-e472616e94b7',
      port: 'p_top'
    }
  },
  {
    shape: 'edge',
    attrs: {
      line: {
        stroke: '#808080',
        strokeWidth: 1,
        strokeDasharray: ''
      }
    },
    id: 'ce3efe66-30bd-4682-b00f-980fd5598255',
    zIndex: -1,
    source: {
      cell: '4291dc4c-c346-4727-895b-e472616e94b7',
      port: 'p_bottom'
    },
    target: {
      cell: '2a156147-d9df-4311-b81a-dffd98928800',
      port: 'p_top'
    }
  },
  {
    shape: 'edge',
    attrs: {
      line: {
        stroke: '#808080',
        strokeWidth: 1,
        strokeDasharray: ''
      }
    },
    id: '7391f9bd-bbe8-463f-bcb9-9fe529c554d9',
    zIndex: -1,
    source: {
      cell: '2a156147-d9df-4311-b81a-dffd98928800',
      port: 'p_bottom'
    },
    target: {
      cell: 'd4a68d9e-2e53-41a3-9983-81a47052c60c',
      port: 'p_top'
    }
  },
  {
    shape: 'edge',
    attrs: {
      line: {
        stroke: '#808080',
        strokeWidth: 1,
        strokeDasharray: ''
      }
    },
    id: 'ec9132e0-8711-4f66-992b-6368e3af9347',
    zIndex: -1,
    source: {
      cell: '2a156147-d9df-4311-b81a-dffd98928800',
      port: 'p_right'
    },
    target: {
      cell: 'fe0b0e6c-10ea-4c44-b254-e305eca02460',
      port: 'p_top'
    }
  },
  {
    shape: 'edge',
    attrs: {
      line: {
        stroke: '#808080',
        strokeWidth: 1,
        strokeDasharray: ''
      }
    },
    id: '527f2093-ea6d-49ed-9246-3ee69e3649ab',
    zIndex: -1,
    source: {
      cell: 'fe0b0e6c-10ea-4c44-b254-e305eca02460',
      port: 'p_bottom'
    },
    target: {
      cell: 'd4a68d9e-2e53-41a3-9983-81a47052c60c',
      port: 'p_right'
    }
  },
  {
    position: {
      x: 210,
      y: 50
    },
    shape: 'start-node',
    id: '32f1b845-9232-4051-b742-8bbf1c7d23a1',
    zIndex: 1
  },
  {
    position: {
      x: 210,
      y: 500
    },
    shape: 'end-node',
    ports: {
      items: [
        {
          group: 'port_g',
          id: 'p_top',
          connected: true
        },
        {
          group: 'port_g',
          id: 'p_right',
          connected: true
        },
        {
          group: 'port_g',
          id: 'p_bottom'
        },
        {
          group: 'port_g',
          id: 'p_left'
        }
      ],
      groups: {
        port_g: {
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
    id: 'd4a68d9e-2e53-41a3-9983-81a47052c60c',
    zIndex: 2
  },
  {
    position: {
      x: 180,
      y: 140
    },
    shape: 'general-node',
    ports: {
      items: [
        {
          group: 'in',
          id: 'p_top',
          connected: true
        },
        {
          group: 'right-out',
          id: 'p_right'
        },
        {
          group: 'bottom-out',
          id: 'p_bottom'
        },
        {
          group: 'left-out',
          id: 'p_left'
        }
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
          zIndex: 20,
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
        'left-out': {
          position: 'left',
          zIndex: 20,
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
    id: 'a4288f97-97c1-4bcd-8c28-fcd9a94f056b',
    zIndex: 3
  },
  {
    position: {
      x: 180,
      y: 240
    },
    shape: 'special-node',
    ports: {
      items: [
        {
          group: 'in',
          id: 'p_top',
          connected: true
        },
        {
          group: 'right-out',
          id: 'p_right'
        },
        {
          group: 'bottom-out',
          id: 'p_bottom'
        },
        {
          group: 'left-out',
          id: 'p_left'
        }
      ],
      groups: {
        in: {
          position: 'top',
          zIndex: 20,
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
          zIndex: 20,
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
          zIndex: 20,
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
        'left-out': {
          position: 'left',
          zIndex: 20,
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
    id: '4291dc4c-c346-4727-895b-e472616e94b7',
    zIndex: 4
  },
  {
    position: {
      x: 210,
      y: 340
    },
    shape: 'shunt-node',
    ports: {
      items: [
        {
          group: 'in',
          id: 'p_top',
          args: {
            dx: -20
          },
          connected: true
        },
        {
          group: 'right-out',
          id: 'p_right',
          args: {
            dy: -20
          }
        },
        {
          group: 'bottom-out',
          id: 'p_bottom',
          args: {
            dx: 20
          }
        },
        {
          group: 'left-out',
          id: 'p_left',
          args: {
            dy: 20
          }
        }
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
          zIndex: 20,
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
        'left-out': {
          position: 'left',
          zIndex: 20,
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
    id: '2a156147-d9df-4311-b81a-dffd98928800',
    zIndex: 5
  },
  {
    position: {
      x: 340,
      y: 410
    },
    shape: 'general-node',
    ports: {
      items: [
        {
          group: 'in',
          id: 'p_top',
          connected: true
        },
        {
          group: 'right-out',
          id: 'p_right'
        },
        {
          group: 'bottom-out',
          id: 'p_bottom'
        },
        {
          group: 'left-out',
          id: 'p_left'
        }
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
          zIndex: 20,
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
        'left-out': {
          position: 'left',
          zIndex: 20,
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
    id: 'fe0b0e6c-10ea-4c44-b254-e305eca02460',
    zIndex: 6
  }
]);
const init = () => {
  graph.value = new Graph({
    container: document.getElementById('container'),
    width: '100%',
    height: '100%',
    selecting: true, // 点选/框选，默认禁用。
    snapline: true,
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
  graph.value.fromJSON(test);
  // cellEvents(graph);
  cellHover(graph);
  cellSelect(graph, curCell);
  connectEdge(graph);
  blankEvent(graph, curCell);
};

const changeNodeName = (name) => {
  curCell.value.isNode() && curCell.value.setAttrs({ label: { text: name } });
  curCell.value.isEdge() && curCell.value.setLabels(name);
};
onMounted(init);
provide('graph', graph);
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
// body {
//   padding: 10px;
// }
.layout {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 10px;
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

.general-node-selected {
  rect {
    fill: #ffdfc4;
    stroke-width: 2;
  }
}
.special-node-selected {
  rect {
    fill: #f8c5c8;
    stroke-width: 2;
  }
}
.shunt-node-selected {
  rect {
    fill: #ccd0f6;
    stroke-width: 2;
  }
}
.start-node-selected {
  circle {
    fill: #d4fff0;
    stroke-width: 2;
  }
}
.end-node-selected {
  circle {
    fill: #ccd0f6;
    stroke-width: 2;
  }
}
</style>

