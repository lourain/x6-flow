
// import { Graph } from '@antv/x6'
export default (Graph) => {

  Graph.registerNode('custom-node', {
    inherit: 'rect',
    width: 100,
    height: 40,
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
        { group: 'in', id: 'in1' },
        { group: 'in', id: 'in2' },
        { group: 'out', id: 'out1' },
        { group: 'out', id: 'out2' }
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
        out: {
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
        }
      }
    }

  },
    true,
  )
}
