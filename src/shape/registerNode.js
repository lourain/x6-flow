
import GeneralNode from "./general"
import StartNode from "./start"
import EndNode from "./end"
import SpecialNode from "./special"
import ShuntNode from "./shunt"

export default (Graph) => {
  Graph.registerNode('general-node', GeneralNode, true)
  Graph.registerNode('start-node', StartNode, true)
  Graph.registerNode('end-node', EndNode, true)
  Graph.registerNode('special-node', SpecialNode, true)
  Graph.registerNode('shunt-node', ShuntNode, true)
}
