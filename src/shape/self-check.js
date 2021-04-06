import { Shape } from "@antv/x6"
import star from "../assets/star-svgrepo-com.svg"
export default class SelfCheck extends Shape.Rect {

}
SelfCheck.config({
  width: 100,
  height: 40,
  zIndex: 100,
  ports: {
    items: [
      { group: 'in', id: 'in1' },
      { group: 'right-out', id: 'out1' },
      { group: 'bottom-out', id: 'out2' }
    ],
    groups: {
      in: {
        position: 'top',
        // zIndex: 1,
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
        // zIndex: 1,
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
        // zIndex: 1,
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
      tagName: 'image',
      selector: 'image',
    },
  ],
  attrs: {
    body: {
      stroke: '#31d0c6',
      strokeWidth: 2,
    },
    image: {
      'xlink:href': star,
      width: 20,
      x: 90,
      y:-12
    }
  },
  tools: [
    {
      name: 'button-remove',  // 工具名称
      args: { x: 0, y: 10 }, // 工具对应的参数
    }
  ]
})
