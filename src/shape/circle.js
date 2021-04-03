import { Shape } from "@antv/x6"
export default class MyCircle extends Shape.Circle {

}
MyCircle.config({
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
})
