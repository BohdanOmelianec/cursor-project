(this["webpackJsonpcursor-project"]=this["webpackJsonpcursor-project"]||[]).push([[0],{209:function(n,t,e){"use strict";e.r(t);var c=e(0),r=e(35),i=e.n(r),a=e(23),o=e(84),s=e(86),d=e(9),j={data:0};var l,b,h=Object(s.a)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"increment":return Object(d.a)(Object(d.a)({},n),{},{data:n.data+1});case"decrement":return Object(d.a)(Object(d.a)({},n),{},{data:n.data-1});default:return n}})),x=(e(96),e(3)),p=(e(97),e(5)),u=e(4),O=e.p+"static/media/mywallet.5bbd8db1.png",f=e(7),g=e(36),m=e(1),y=u.a.div(l||(l=Object(x.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 50px;\n    padding: 10px 20px;\n"])));function v(n){var t=n.data;return Object(m.jsxs)(y,{children:[Object(m.jsx)("span",{children:t.category}),Object(m.jsx)("span",{children:t.description}),Object(m.jsx)("span",{children:t.date}),Object(m.jsx)("span",{children:t.money}),Object(m.jsx)("span",{children:"..."})]})}var w,k=u.a.div(b||(b=Object(x.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 50px;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    padding: 10px 20px;\n"])));function C(n){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(k,{children:[Object(m.jsx)("span",{children:"Category"}),Object(m.jsx)("span",{children:"Description"}),Object(m.jsx)("span",{children:"Date"}),Object(m.jsx)("span",{children:"Money"}),Object(m.jsx)("span",{children:"Action"})]}),n.data.map((function(n,t){return Object(m.jsx)(v,{data:n},t)}))]})}var A,F,M,z,T,D,S,$=u.a.div(w||(w=Object(x.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 50px;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    padding: 10px 20px;\n"])));function I(n){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)($,{children:[Object(m.jsx)("span",{children:"Category"}),Object(m.jsx)("span",{children:"Description"}),Object(m.jsx)("span",{children:"Date"}),Object(m.jsx)("span",{children:"Money"}),Object(m.jsx)("span",{children:"Action"})]}),n.data.map((function(n,t){return Object(m.jsx)(v,{data:n},t)}))]})}var B=u.a.div(A||(A=Object(x.a)(["\n    display: flex;\n\n"]))),J=Object(u.a)(a.b)(F||(F=Object(x.a)(["\n    display: inline-block;\n    width: 200px;\n    text-decoration: none;\n    color: ",";\n    text-align: center;\n    padding: 5px;\n"])),(function(n){return"active"===n.className?"#26b8ff":"#000000"})),P=u.a.div(M||(M=Object(x.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n\n"]))),E=u.a.div(z||(z=Object(x.a)(["\n\n"]))),H=u.a.span(T||(T=Object(x.a)(["\n    font-size: 18px;\n    font-weight: 500;\n    display: inline-block;\n    margin: 25px 10px 25px 0;  \n    color: #5f5f5f;\n"]))),L=u.a.select(D||(D=Object(x.a)(["\n    font-size: 18px;\n    border: none;\n    outline: none;\n    color: #5f5f5f;\n"]))),W=u.a.button(S||(S=Object(x.a)(["\n    height: 40px;\n    padding: 0 20px;\n    background: #26b8ff;\n    color: white;\n    border: none;\n    outline: none;\n    border-radius: 5px;\n"]))),N=[{category:"Food",description:"All my food",date:"22 Aug",money:"$25"},{category:"Travel",description:"buy a tent",date:"15 May",money:"$180"},{category:"Helth",description:"Medicine",date:"27 Mar",money:"$13"}];var q,G=function(){var n=Object(p.f)(),t=Object(c.useState)(N),e=Object(g.a)(t,2),r=e[0],i=e[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(B,{children:[Object(m.jsx)(J,{to:"".concat(n.url,"/charges"),children:"Charges"}),Object(m.jsx)(J,{to:"".concat(n.url,"/incomes"),children:"Incomes"})]}),Object(m.jsxs)(P,{children:[Object(m.jsxs)(E,{children:[Object(m.jsx)(H,{children:"My Charges"}),Object(m.jsxs)(L,{children:[Object(m.jsx)("option",{children:"this week"}),Object(m.jsx)("option",{children:"this month"})]})]}),Object(m.jsx)(W,{onClick:function(){i([].concat(Object(f.a)(r),[{category:"Travel",description:"-",date:"25 Aug",money:"$125"}]))},children:"Add more"})]}),Object(m.jsx)(p.a,{path:"".concat(n.url,"/charges"),children:Object(m.jsx)(C,{data:r})}),Object(m.jsx)(p.a,{path:"".concat(n.url,"/incomes"),children:Object(m.jsx)(I,{data:r})})]})},K=e(85),Q={labels:["January","February","March","April","May"],datasets:[{label:"Income",fill:!1,lineTension:.5,backgroundColor:"rgba(253,178,1,1)",borderColor:"rgba(253,178,1,1)",borderWidth:2,data:[650,59,180,81,300]},{label:"Expenses",fill:!1,lineTension:.5,backgroundColor:"rgba(132,125,115,1)",borderColor:"rgba(132,125,115,1)",borderWidth:2,data:[65,100,80,95,56]}]},R=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(K.a,{data:Q,options:{title:{display:!0,text:"Money flow",fontSize:20},legend:{display:!0,position:"right"}}})})};function U(){return Object(m.jsx)("div",{children:"Categories"})}var V,X=u.a.div(q||(q=Object(x.a)(["\n\tdisplay: flex;\n\tflex-direction: ",";\n\talign-items: ",";\n\tjustify-content: ",";\n\tmargin: ",";\n\twidth: ",";\n\theight: ",";\n"])),(function(n){return n.direction||"row"}),(function(n){return n.align||"stretch"}),(function(n){return n.justify||"stretch"}),(function(n){return n.margin||"0"}),(function(n){return n.width||"100%"}),(function(n){return n.height||"100%"}));function Y(n){return Object(m.jsx)(X,Object(d.a)({},n))}var Z,_,nn,tn,en,cn,rn=u.a.span(V||(V=Object(x.a)(["\n\tcolor: ",";\n\ttext-decoration: ",";\n\tfont-size: ",";\n\twidth: ",";\n\theight: ",";\n\tmargin: ",";\n\ttext-align: ",";\n\tcursor: ",";\n\tdisplay: ",";\n"])),(function(n){return n.color||"white"}),(function(n){return n.decoration||"none"}),(function(n){return n.fSize||"1em"}),(function(n){return n.width||"100%"}),(function(n){return n.height||"100%"}),(function(n){return n.margin||"0"}),(function(n){return n.textAlign||"start"}),(function(n){return n.cursor||""}),(function(n){return n.display||"inline"}));function an(n){return Object(m.jsx)(rn,Object(d.a)({},n))}function on(){return Object(m.jsx)(Y,{margin:"auto",justify:"center",align:"center",children:Object(m.jsx)(an,{textAlign:"center",margin:"20% auto",fSize:"4em",color:"black",children:"\ud83d\ude1e Page not found \ud83d\ude1e"})})}var sn=u.a.div(Z||(Z=Object(x.a)(["\n\twidth: 100%;\n\tmin-height: 100vh;\n\tdisplay: flex;\n"]))),dn=u.a.div(_||(_=Object(x.a)(["\n  width: 20%;\n  height: 100vh;\n  background: #efefef;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),jn=Object(u.a)(a.b)(nn||(nn=Object(x.a)(["\n  text-decoration: none;\n  color: ##5f5f5f;\n"]))),ln=u.a.img(tn||(tn=Object(x.a)(["\n  width: 200px;\n  height: 100px;\n"]))),bn=u.a.div(en||(en=Object(x.a)(["\n\twidth: 100%;\n"]))),hn=u.a.div(cn||(cn=Object(x.a)(["\n  height: 100px;\n  text-align: right;\n"])));function xn(){return Object(m.jsxs)(sn,{children:[Object(m.jsxs)(dn,{children:[Object(m.jsx)(ln,{src:O,alt:"logo"}),Object(m.jsx)(jn,{to:"/cursor-project",children:"Home"}),Object(m.jsx)(jn,{exact:!0,to:"/categories",children:"Categories"}),Object(m.jsx)(jn,{to:"/charts",children:"Charts"})]}),Object(m.jsxs)(bn,{children:[Object(m.jsx)(hn,{children:"Balance: $2500"}),Object(m.jsxs)(p.c,{children:[Object(m.jsx)(p.a,{path:"/cursor-project",component:G}),Object(m.jsx)(p.a,{exact:!0,path:"/categories",component:U}),Object(m.jsx)(p.a,{path:"/charts",component:R}),Object(m.jsx)(p.a,{exact:!0,path:"*",component:on})]})]})]})}var pn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,210)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;e(n),c(n),r(n),i(n),a(n)}))};i.a.render(Object(m.jsx)(o.a,{store:h,children:Object(m.jsx)(a.a,{children:Object(m.jsx)(xn,{})})}),document.getElementById("root")),pn()},96:function(n,t,e){},97:function(n,t,e){}},[[209,1,2]]]);
//# sourceMappingURL=main.e9c48707.chunk.js.map