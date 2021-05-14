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

  graph.value.on('cell:selected', ({ cell }) => {
    let removeBtnCfg;
    if (cell.isEdge()) {
      cell.attr('line', { stroke: 'skyblue', strokeWidth: 3 });
      removeBtnCfg = { x: 0, y: 0, offset: { distance: '30%' } };
    }

    if (cell.isNode()) {
      const cellView = graph.value.findView(cell);
      cellView.addClass(`${cell.shape}-selected`);
      removeBtnCfg = { x: 0, y: 0, offset: { x: -5, y: -5 } };
    }
    cell.addTools({
      name: 'button-remove', // 工具名称
      args: removeBtnCfg // 工具对应的参数
    });
  });

  graph.value.on('cell:unselected', ({ cell }) => {
    if (cell.isEdge()) {
      cell.attr('line', { stroke: '#808080', strokeWidth: 1 });
    } else {
      const cellView = graph.value.findView(cell);
      cellView && cellView.removeClass(`${cell.shape}-selected`);
    }
    cell.removeTools()
  });
  // 连接线事件
  graph.value.on('edge:connected', (args) => {
    const edge = args.edge;
    const node = args.currentCell;
    const elem = args.currentMagnet;
    const portId = elem.getAttribute('port');

    // 触发 port 重新渲染
    node.setPortProp(portId, 'connected', true);
    edge.zIndex = -1;
    // 更新连线样式
    edge.attr({
      line: {
        strokeDasharray: '',
        targetMarker: 'classic'
      }
    });
    // edge.appendLabel({
    //   attrs: {
    //     text: {
    //       text: 'Hello Label'
    //     }
    //   }
    // });
  });


}

