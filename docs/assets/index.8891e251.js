var e=Object.defineProperty,t=(t,o,r)=>(((t,o,r)=>{o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r})(t,"symbol"!=typeof o?o+"":o,r),r);import{i as o,r,w as s,a as i,o as l,c as a,b as d,d as n,e as c,A as p,f as g,t as f,g as u,v as h,h as m,u as b,R as k,C as x,j as _,G as v,k as y,p as z,l as I,_ as W,m as N}from"./vendor.e4e4b4ef.js";const w={class:"nodes-bar"},A=d("p",null,"开始",-1),D=d("p",null,"结束",-1),C=d("p",null,"节点",-1),S=d("p",null,"特殊节点",-1),V=d("img",{src:"/assets/shunt.2835852a.png",alt:""},null,-1),M=d("p",null,"分流",-1),E={style:{"margin-top":"20px"}},B=c("Export"),F={expose:[],setup(e){const{Dnd:t}=p,c=o("graph"),g=r({}),f=e=>{const t=e.currentTarget.getAttribute("data-type");let o;"general-node"===t&&(o=c.value.createNode({shape:"general-node"})),"start-node"===t&&(o=c.value.createNode({shape:"start-node"})),"special-node"===t&&(o=c.value.createNode({shape:"special-node"})),o=c.value.createNode({shape:t}),g.value.start(o,e)},u=()=>{console.log(JSON.stringify(c.value.toJSON({diff:!0}),null,2))};return s(c,(e=>{console.log(e),g.value=new t({target:c.value,validateNode:()=>!0})})),(e,t)=>{const o=i("el-button");return l(),a("ul",w,[d("li",null,[d("div",{class:"start-node","data-type":"start-node",onMousedown:f},null,32),A]),d("li",null,[d("div",{class:"end-node","data-type":"end-node",onMousedown:f},null,32),D]),d("li",null,[d("div",{class:"general-node","data-type":"general-node",onMousedown:f},null,32),C]),d("li",null,[d("div",{class:"special-node","data-type":"special-node",onMousedown:f},null,32),S]),d("li",null,[d("div",{class:"shunt-node","data-type":"shunt-node",onMousedown:f},[V],32),M]),d("li",E,[d(o,{onClick:u},{default:n((()=>[B])),_:1})])])}}};const P={class:"node-info"},L=d("p",null,"标题：",-1),O=d("p",null,"信息：",-1),R=d("p",null,"脚本:",-1),j={expose:[],props:{curCell:Object},emits:["changeNodeName"],setup(e,{emit:t}){const o=e,n=r(""),c=g({cellName:"",cellDesc:"",cellScript:""}),{curCell:p}=f(o),k=r(!1);return f(c),s(p,(e=>{if(e){if(e.isNode()&&(n.value="节点",console.log(e.shape),"special-node"===e.shape?k.value=!0:k.value=!1,c.cellName=e.getAttrByPath("label/text")),e.isEdge()){n.value="线";const t=e.getLabels()[0];c.cellName=t?t.attrs.label.text:""}}else n.value=""})),s((()=>c.cellName),(e=>{t("changeNodeName",e)})),(e,t)=>{const o=i("el-input");return l(),a("div",P,[u(d("section",null,[d("h3",null,m(n.value),1),d("div",null,[L,d(o,{type:"text",modelValue:b(c).cellName,"onUpdate:modelValue":t[1]||(t[1]=e=>b(c).cellName=e)},null,8,["modelValue"])]),d("div",null,[O,d(o,{autosize:{minRows:4,maxRows:8},type:"textarea",modelValue:b(c).cellDesc,"onUpdate:modelValue":t[2]||(t[2]=e=>b(c).cellDesc=e)},null,8,["modelValue"])]),u(d("div",null,[R,d(o,{autosize:{minRows:4,maxRows:8},type:"textarea",modelValue:b(c).cellScript,"onUpdate:modelValue":t[3]||(t[3]=e=>b(c).cellScript=e)},null,8,["modelValue"])],512),[[h,k.value]])],512),[[h,n.value]])])}}};class J extends k{}J.config({width:100,height:40,zIndex:100,markup:[{tagName:"rect",selector:"body"},{tagName:"text",selector:"label"},{tagName:"image",selector:"icon"}],attrs:{label:{text:"普通节点",fill:"#FF7A0B",strokeWidth:.4,fontSize:12},body:{stroke:"#FF7C0E",strokeWidth:1,rx:5,ry:5},icon:{"xlink:href":"/assets/label.67ff948b.png",width:20,height:20,refX:1,refY:1}},ports:{items:[{group:"in",id:"p_top"},{group:"right-out",id:"p_right"},{group:"bottom-out",id:"p_bottom"},{group:"left-out",id:"p_left"}],groups:{in:{position:"top",zIndex:1,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"bottom-out":{position:"bottom",zIndex:1,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"right-out":{position:"right",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"left-out":{position:"left",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}}}}});class T extends x{}T.config({width:40,height:40,zIndex:100,markup:[{tagName:"circle",selector:"body"},{tagName:"image",selector:"icon"}],attrs:{body:{stroke:"#06CC76",strokeWidth:1},icon:{"xlink:href":"/assets/start.31d12e4a.png",width:20,height:20,x:10,y:10}},ports:{items:[{group:"port_g",id:"p_top"},{group:"port_g",id:"p_right"},{group:"port_g",id:"p_bottom"},{group:"port_g",id:"p_left"}],groups:{port_g:{attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}},position:"ellipseSpread"}}}});class U extends x{}U.config({width:40,height:40,zIndex:100,markup:[{tagName:"circle",selector:"body"},{tagName:"image",selector:"icon"}],attrs:{body:{stroke:"#4440AA",strokeWidth:1},icon:{"xlink:href":"/assets/end.8f1c8573.png",width:20,height:20,x:10,y:10}},ports:{items:[{group:"port_g",id:"p_top"},{group:"port_g",id:"p_right"},{group:"port_g",id:"p_bottom"},{group:"port_g",id:"p_left"}],groups:{port_g:{attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}},position:"ellipseSpread"}}}});class $ extends k{constructor(){super(...arguments),t(this,"nodeName","")}}$.config({width:100,height:40,zIndex:100,ports:{items:[{group:"in",id:"p_top"},{group:"right-out",id:"p_right"},{group:"bottom-out",id:"p_bottom"},{group:"left-out",id:"p_left"}],groups:{in:{position:"top",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"bottom-out":{position:"bottom",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"right-out":{position:"right",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"left-out":{position:"left",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}}}},markup:[{tagName:"rect",selector:"body"},{tagName:"text",selector:"label"},{tagName:"image",selector:"icon"}],attrs:{label:{text:"特殊节点",fill:"#F33B3D",strokeWidth:.4,fontSize:12},body:{stroke:"#F33B3D",strokeWidth:1,rx:5,ry:5},icon:{"xlink:href":"/assets/edit.883aeae5.png",width:20,height:20,refX:1,refY:1}}});class X extends k{}X.config({width:40,height:40,zIndex:100,angle:45,markup:[{tagName:"rect",selector:"body"},{tagName:"image",selector:"icon"}],attrs:{body:{stroke:"#3e8bf8",strokeWidth:1,rx:5,ry:5},icon:{"xlink:href":"/assets/shunt.2835852a.png",transform:"rotate(-45,20,20)",width:20,height:20,x:10,y:9}},ports:{items:[{group:"in",id:"p_top",args:{dx:-20}},{group:"right-out",id:"p_right",args:{dy:-20}},{group:"bottom-out",id:"p_bottom",args:{dx:20}},{group:"left-out",id:"p_left",args:{dy:20}}],groups:{in:{position:"top",zIndex:1,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"bottom-out":{position:"bottom",zIndex:1,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"right-out":{position:"right",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"left-out":{position:"left",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}}}}});const Y=(e,t)=>{document.querySelectorAll(`g[data-cell-id="${e.id}"] .x6-port-body`).forEach((e=>{e.style.visibility=t?"visible":"hidden"}))};const q={class:"layout"},G=d("div",{id:"container",class:"cavs"},null,-1);I({expose:[],setup(e){var t;(t=v).registerNode("general-node",J,!0),t.registerNode("start-node",T,!0),t.registerNode("end-node",U,!0),t.registerNode("special-node",$,!0),t.registerNode("shunt-node",X,!0);const o=r({}),s=r({}),i=g([{shape:"edge",attrs:{line:{stroke:"#808080",strokeWidth:1,strokeDasharray:""}},id:"bf8d1c70-857d-41bb-8271-280a3a104824",zIndex:-1,source:{cell:"32f1b845-9232-4051-b742-8bbf1c7d23a1",port:"p_bottom"},target:{cell:"a4288f97-97c1-4bcd-8c28-fcd9a94f056b",port:"p_top"}},{shape:"edge",attrs:{line:{stroke:"#808080",strokeWidth:1,strokeDasharray:""}},id:"f4ce3de8-c388-41ee-9833-ef6e1f1dba2a",zIndex:-1,source:{cell:"a4288f97-97c1-4bcd-8c28-fcd9a94f056b",port:"p_bottom"},target:{cell:"4291dc4c-c346-4727-895b-e472616e94b7",port:"p_top"}},{shape:"edge",attrs:{line:{stroke:"#808080",strokeWidth:1,strokeDasharray:""}},id:"ce3efe66-30bd-4682-b00f-980fd5598255",zIndex:-1,source:{cell:"4291dc4c-c346-4727-895b-e472616e94b7",port:"p_bottom"},target:{cell:"2a156147-d9df-4311-b81a-dffd98928800",port:"p_top"}},{shape:"edge",attrs:{line:{stroke:"#808080",strokeWidth:1,strokeDasharray:""}},id:"7391f9bd-bbe8-463f-bcb9-9fe529c554d9",zIndex:-1,source:{cell:"2a156147-d9df-4311-b81a-dffd98928800",port:"p_bottom"},target:{cell:"d4a68d9e-2e53-41a3-9983-81a47052c60c",port:"p_top"}},{shape:"edge",attrs:{line:{stroke:"#808080",strokeWidth:1,strokeDasharray:""}},id:"ec9132e0-8711-4f66-992b-6368e3af9347",zIndex:-1,source:{cell:"2a156147-d9df-4311-b81a-dffd98928800",port:"p_right"},target:{cell:"fe0b0e6c-10ea-4c44-b254-e305eca02460",port:"p_top"}},{shape:"edge",attrs:{line:{stroke:"#808080",strokeWidth:1,strokeDasharray:""}},id:"527f2093-ea6d-49ed-9246-3ee69e3649ab",zIndex:-1,source:{cell:"fe0b0e6c-10ea-4c44-b254-e305eca02460",port:"p_bottom"},target:{cell:"d4a68d9e-2e53-41a3-9983-81a47052c60c",port:"p_right"}},{position:{x:210,y:50},shape:"start-node",id:"32f1b845-9232-4051-b742-8bbf1c7d23a1",zIndex:1},{position:{x:210,y:500},shape:"end-node",ports:{items:[{group:"port_g",id:"p_top",connected:!0},{group:"port_g",id:"p_right",connected:!0},{group:"port_g",id:"p_bottom"},{group:"port_g",id:"p_left"}],groups:{port_g:{attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}},position:"ellipseSpread"}}},id:"d4a68d9e-2e53-41a3-9983-81a47052c60c",zIndex:2},{position:{x:180,y:140},shape:"general-node",ports:{items:[{group:"in",id:"p_top",connected:!0},{group:"right-out",id:"p_right"},{group:"bottom-out",id:"p_bottom"},{group:"left-out",id:"p_left"}],groups:{in:{position:"top",zIndex:1,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"bottom-out":{position:"bottom",zIndex:1,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"right-out":{position:"right",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"left-out":{position:"left",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}}}},id:"a4288f97-97c1-4bcd-8c28-fcd9a94f056b",zIndex:3},{position:{x:180,y:240},shape:"special-node",ports:{items:[{group:"in",id:"p_top",connected:!0},{group:"right-out",id:"p_right"},{group:"bottom-out",id:"p_bottom"},{group:"left-out",id:"p_left"}],groups:{in:{position:"top",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"bottom-out":{position:"bottom",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"right-out":{position:"right",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"left-out":{position:"left",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}}}},id:"4291dc4c-c346-4727-895b-e472616e94b7",zIndex:4},{position:{x:210,y:340},shape:"shunt-node",ports:{items:[{group:"in",id:"p_top",args:{dx:-20},connected:!0},{group:"right-out",id:"p_right",args:{dy:-20}},{group:"bottom-out",id:"p_bottom",args:{dx:20}},{group:"left-out",id:"p_left",args:{dy:20}}],groups:{in:{position:"top",zIndex:1,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"bottom-out":{position:"bottom",zIndex:1,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"right-out":{position:"right",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"left-out":{position:"left",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}}}},id:"2a156147-d9df-4311-b81a-dffd98928800",zIndex:5},{position:{x:340,y:410},shape:"general-node",ports:{items:[{group:"in",id:"p_top",connected:!0},{group:"right-out",id:"p_right"},{group:"bottom-out",id:"p_bottom"},{group:"left-out",id:"p_left"}],groups:{in:{position:"top",zIndex:1,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"bottom-out":{position:"bottom",zIndex:1,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"right-out":{position:"right",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}},"left-out":{position:"left",zIndex:20,attrs:{circle:{r:4,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}}}}},id:"fe0b0e6c-10ea-4c44-b254-e305eca02460",zIndex:6}]),n=e=>{s.value.isNode()&&s.value.setAttrs({label:{text:e}}),s.value.isEdge()&&s.value.setLabels(e)};return y((()=>{o.value=new v({container:document.getElementById("container"),width:"100%",height:"100%",selecting:!0,snapline:!0,grid:{size:10,visible:!0},highlighting:{magnetAvailable:{name:"stroke",args:{padding:4,attrs:{"stroke-width":4,stroke:"skyblue"}}},magnetAdsorbed:{name:"stroke",args:{padding:4,attrs:{"stroke-width":8,stroke:"skyblue"}}}},connecting:{snap:!0,allowBlank:!1,allowLoop:!1,highlight:!0,sourceAnchor:{name:"center"},targetAnchor:"center",connectionPoint:"anchor",router:"manhattan",validateMagnet:({magnet:e})=>"in"!==e.getAttribute("port-group"),createEdge(){return this.createEdge({zIndex:-1,attrs:{line:{strokeDasharray:"5 5",stroke:"#808080",strokeWidth:1,targetMarker:{name:"block",args:{size:"6"}}}}})},validateConnection({targetView:e,sourceMagnet:t,targetMagnet:o}){if(!t||!o)return!1;const r=o.getAttribute("port");return!!e.cell.getPort(r)}}}),o.value.fromJSON(i),(e=>{e.value.on("node:mouseenter",(({node:e})=>{Y(e,!0)})),e.value.on("node:mouseleave",(({node:e})=>{Y(e,!1)}))})(o),((e,t)=>{const o=_();console.log(o),e.value.on("cell:selected",(({cell:o})=>{let r;t.value=o,o.isEdge()&&(o.attr("line",{stroke:"skyblue",strokeWidth:3}),r={distance:"30%"}),o.isNode()&&(e.value.findView(o).addClass(`${o.shape}-selected`),r={x:0,y:0,offset:{x:-5,y:-5}}),o.addTools({name:"button-remove",args:r})})),e.value.on("cell:unselected",(({cell:t})=>{if(o.ctx.curCell=null,t.isEdge())t.attr("line",{stroke:"#808080",strokeWidth:1});else{const o=e.value.findView(t);o&&o.removeClass(`${t.shape}-selected`)}t.removeTools()}))})(o,s),(e=>{e.value.on("edge:connected",(e=>{const t=e.edge,o=e.currentCell,r=e.currentMagnet.getAttribute("port");o.setPortProp(r,"connected",!0),t.zIndex=-1,t.attr({line:{strokeDasharray:"",targetMarker:"classic"}}),t.appendLabel({attrs:{text:{text:"Hello Label"}}})}))})(o),((e,t)=>{e.value.on("blank:click",(()=>{t.value=null}))})(o,s)})),z("graph",o),(e,t)=>(l(),a("div",q,[d(F),G,d(j,{onChangeNodeName:n,"cur-cell":s.value},null,8,["cur-cell"])]))}}).component(W.name,W).component(N.name,N).mount("#app");
