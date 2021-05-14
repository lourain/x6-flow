import { Shape } from "@antv/x6"
import shuntIcon from "../assets/shunt.png"
export default class ShuntNode extends Shape.Rect {

}
ShuntNode.config({
  width: 40,
  height: 40,
  zIndex: 100,
  angle: 45,
  markup: [
    {
      tagName: 'rect',
      selector: 'body'
    },
    {
      tagName: 'image',
      selector: 'icon'
    }
  ],
  attrs: {
    body: {
      stroke: '#3e8bf8',
      strokeWidth: 1,
      // fill: '#CCD0F6',
      rx: 5,
      ry: 5
    },
    icon: {
      'xlink:href': shuntIcon,
      transform: "rotate(-45,20,20)",

      width: 20,
      height: 20,
      x: 10,
      y: 9
    }
  },
  ports: {
    items: [
      { group: 'in', id: 'p_top', args: { dx: -20 } },
      { group: 'right-out', id: 'p_right',args: { dy: -20 } },
      { group: 'bottom-out', id: 'p_bottom',args: { dx: 20 } },
      { group: 'left-out', id: 'p_left' ,args: { dy: 20 } }
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
