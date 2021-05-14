
import GeneralNode from "./general"
import MyCircle from "./circle"
import SelfCheck from "./self-check"

export default (Graph) => {
  Graph.registerNode('general-node', GeneralNode, true)
  Graph.registerNode('custom-circle', MyCircle, true)
  Graph.registerNode('self-check', SelfCheck, true)
}
