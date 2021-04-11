import { Shape } from "@antv/x6"
export default class MyCircle extends Shape.Circle {

}
MyCircle.config({
  shape: 'circle',
  width: 60,
  height: 60,
  zIndex:100,
  attrs: {
    label: {
      text: ''
    },
    body: {
      stroke: '#31d0c6',
      strokeWidth: 2
    }
  },
  ports: {
    items: [
      { group: 'port_g', id: 'p_top' },
      { group: 'port_g', id: 'p_right' },
      { group: 'port_g', id: 'p_bottom' },
      { group: 'port_g', id: 'p_left' }
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
  tools: [
    {
      name: 'button-remove', // 工具名称
      args: { x: 0, y: 5 } // 工具对应的参数
    }
  ]
})
