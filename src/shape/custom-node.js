
import MyRect from "@/shape/rect"
export default (Graph) => {

  Graph.registerNode('custom-node', MyRect,
    true,
  )
}
