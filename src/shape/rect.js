
import { Shape } from "@antv/x6"
export default class MyRect extends Shape.Rect {

}
MyRect.config({
  width: 100,
  height: 40,
  zIndex: 100,
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
      { group: 'in', id: 'p_top' },
      { group: 'right-out', id: 'p_right' },
      { group: 'bottom-out', id: 'p_bottom' }
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
      }
    }
  },
  tools: [
    {
      name: 'button-remove',  // 工具名称
      args: { x: 0, y: 5 }, // 工具对应的参数
    }
  ]
})

