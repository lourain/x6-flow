export default (graph,curCell) => {
  graph.value.on('blank:click', () => {
    curCell.value = null
  })
}
