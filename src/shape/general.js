
import { Shape } from "@antv/x6"
import labeIcon from "../assets/label.png"
export default class GeneralNode extends Shape.Rect {

}
GeneralNode.config({
  width: 100,
  height: 40,
  zIndex: 100,
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
      text: '普通节点',
      fill: "#FF7A0B",
      strokeWidth: 0.4,
      fontSize: 12,
    },
    body: {
      stroke: "#FF7C0E",
      strokeWidth: 2,
      fill: "#FFDFC4",
      rx: 5,
      ry: 5
    },
    icon: {
      'xlink:href': labeIcon,
      width: 20,
      height: 20,
      refX: 1,
      refY: 1
    }
  },
  ports: {
    items: [
      { group: 'in', id: 'p_top' },
      { group: 'right-out', id: 'p_right' },
      { group: 'bottom-out', id: 'p_bottom' },
      { group: 'left-out', id: 'p_left' }
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
      "bottom-out": {
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
})

