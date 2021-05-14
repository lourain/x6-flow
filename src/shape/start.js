import { Shape } from "@antv/x6"
import startIcon from "../assets/start.png"
export default class StratNode extends Shape.Circle {

}
StratNode.config({
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
      stroke: '#06CC76',
      strokeWidth: 1,
      // fill: '#d4fff0'
    },
    icon: {
      'xlink:href': startIcon,
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
