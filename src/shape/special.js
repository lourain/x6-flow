import { Shape } from "@antv/x6"
import editIcon from "../assets/edit.png"
export default class SelfCheck extends Shape.Rect {
  nodeName = '';
}
SelfCheck.config({
  width: 100,
  height: 40,
  zIndex: 100,
  ports: {
    items: [
      { group: 'in', id: 'p_top' },
      { group: 'right-out', id: 'p_right' },
      { group: 'bottom-out', id: 'p_bottom' },
      { group: 'left-out', id: 'p_left' },
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
      "bottom-out": {
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
      "right-out": {
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
      "left-out": {
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
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'text',
      selector: 'label',
    },
    {
      tagName: 'image',
      selector: 'icon'
    }
  ],
  attrs: {
    label: {
      text: '特殊节点',
      fill: "#F33B3D",
      strokeWidth: 0.4,
      fontSize: 12
    },
    body: {
      stroke: "#F33B3D",
      strokeWidth: 1,
      // fill: "#F8C5C8",
      rx: 5,
      ry: 5
    },
    icon: {
      'xlink:href': editIcon,
      width: 20,
      height: 20,
      refX: 1,
      refY: 1
    }
  },
})
