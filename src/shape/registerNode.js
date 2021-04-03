
import MyRect from "./rect"
import MyCircle from "./circle"

export default (Graph) => {
  Graph.registerNode('custom-rect', MyRect, true)
  Graph.registerNode('custom-circle', MyCircle, true)
}
