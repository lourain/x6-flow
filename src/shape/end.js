import { Shape } from "@antv/x6"
import endIcon from "../assets/end.png"
export default class EndNode extends Shape.Circle {

}
EndNode.config({
  width: 40,
  height: 40,
  zIndex: 100,
  markup: [
    {
      tagName: 'circle',
      selector: 'body'
    },
    {
      tagName: 'image',
      selector: 'icon'
    }
  ],
  attrs: {
    body: {
      stroke: '#4440AA',
      strokeWidth: 1,
      // fill: '#CCD0F6'
    },
    icon: {
      'xlink:href': endIcon,
      width: 20,
      height: 20,
      x: 10,
      y: 10
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
})
