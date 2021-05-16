export default (graph)=> {
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
    edge.appendLabel({
      attrs: {
        text: {
          text: 'Hello Label'
        }
      }
    });
  });
}
