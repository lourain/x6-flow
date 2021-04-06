
import MyRect from "./rect"
import MyCircle from "./circle"
import SelfCheck from "./self-check"

export default (Graph) => {
  Graph.registerNode('custom-rect', MyRect, true)
  Graph.registerNode('custom-circle', MyCircle, true)
  Graph.registerNode('self-check', SelfCheck, true)
}
