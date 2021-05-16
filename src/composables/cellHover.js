const changePortsVisible = (node, visible) => {
  const ports = document.querySelectorAll(`g[data-cell-id="${node.id}"] .x6-port-body`);
  ports.forEach((port) => {
    port.style.visibility = visible ? 'visible' : 'hidden';
  });
};

export default (graph) => {
  graph.value.on('node:mouseenter', ({ node }) => {
    changePortsVisible(node, true);
  });

  graph.value.on('node:mouseleave', ({ node }) => {
    changePortsVisible(node, false);
  });
}
