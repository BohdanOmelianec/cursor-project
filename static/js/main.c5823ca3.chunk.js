(this["webpackJsonpcursor-project"]=this["webpackJsonpcursor-project"]||[]).push([[0],{222:function(t,e,n){"use strict";n.r(e);var c,r,a,o,i,s,d,l,b,j=n(3),u=n(0),p=n(45),h=n.n(p),O=n(29),g=n(8),x=n(10),f=n(4),m=n.p+"static/media/mywallet.5bbd8db1.png",y=n(7),v=n(6),w=n(16),D=n(11),k={Food:D.o,Restaurants:D.g,Health:D.h,Travel:D.l,Home:D.i,Car:D.a,Fun:D.e,Gift:D.f,Salary:D.j,Bonus:D.c,Clothes:D.n,UtilityBills:D.d,Pets:D.b,faTrashAlt:D.m,faPen:D.k},C="ADD_CATEGORY",M="REMOVE_CATEGORY",S="EDIT_CATEGORY",A="CLOSE_MODAL",B="OPEN_MODAL",R="REMOVE_ITEM",I="ADD_ITEM",T="EDIT_ITEM",z="OPEN_EDIT_MODAL",E="CLOSE_EDIT_MODAL",F=n(5),P=n(17),_=n.n(P),L={display:"none",displayEdit:"none",chargesDB:[{category:"Food",description:"All my food",date:_()().subtract(5,"days").format("l"),milliseconds:16297524e5,money:25},{category:"Travel",description:"buy a tent",date:_()().subtract(14,"days").subtract(3,"month").format("l"),milliseconds:1621026e6,money:180},{category:"Health",description:"Medicine",date:_()().subtract(2,"days").subtract(5,"month").format("l"),milliseconds:1616796e6,money:13}],incomesDB:[{category:"Salary",description:"",date:_()().subtract(5,"days").format("l"),milliseconds:16297524e5,money:2300},{category:"Gift",description:"",date:_()().subtract(14,"days").subtract(3,"month").format("l"),milliseconds:1621026e6,money:200},{category:"Bonus",description:"",date:_()().subtract(2,"days").subtract(5,"month").format("l"),milliseconds:1616796e6,money:350}]},G=function(){return{type:B}},q=function(){return{type:A}},H=function(){return{type:E}},N=n(1),U=f.b.div(c||(c=Object(j.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 50px;\n    padding: 10px 20px;\n    &:nth-child(odd) {\n        background-color: #f1f1f1;\n    }\n"])));function V(t){var e=t.data,n=t.removeId,c=t.arr,r=t.target,a=Object(g.b)();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(U,{children:[Object(N.jsxs)("span",{children:[Object(N.jsx)(w.a,{icon:k[e.category]})," ",e.category]}),Object(N.jsx)("span",{children:e.description}),Object(N.jsx)("span",{children:e.date}),Object(N.jsxs)("span",{children:["$ ",parseFloat(e.money).toFixed(2)]}),Object(N.jsxs)("span",{style:{cursor:"pointer"},children:[Object(N.jsx)(w.a,{onClick:function(){var t=c.filter((function(t,e){return e!==n}));a({type:R,filteredArr:t,target:r})},icon:k.faTrashAlt})," ",Object(N.jsx)(w.a,{icon:k.faPen,onClick:function(){return a(function(t,e){return{type:z,id:t,targetItem:e}}(n,e))}})]})]})})}var J,W,Z,Y,$,K,Q,X,tt=f.b.div(r||(r=Object(j.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1050;\n\tdisplay: ",";\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n"])),(function(t){return t.display})),et=f.b.div(a||(a=Object(j.a)(["\n\tmax-width: 500px;\n\tmargin: 40px auto;\n"]))),nt=f.b.div(o||(o=Object(j.a)(["\n\tposition: relative;\n\twidth: 100%;\n\tpadding: 40px;\n\tbackground-color: #fff;\n\tborder: 1px solid rgba(0, 0, 0, 0.2);\n\tborder-radius: 4px;\n\tmax-height: 80vh;\n\toverflow-y: auto;\n"]))),ct=f.b.div(i||(i=Object(j.a)(["\n\tposition: absolute;\n\ttop: 8px;\n\tright: 14px;\n\tfont-size: 30px;\n\tcolor: #000;\n\topacity: 0.5;\n\tfont-weight: 700;\n\tborder: none;\n\tbackground-color: transparent;\n\tcursor: pointer;\n"]))),rt=f.b.div(s||(s=Object(j.a)(["\n\ttext-align: center;\n\tfont-size: 22px;\n\ttext-transform: uppercase;\n"]))),at=f.b.input(d||(d=Object(j.a)(["\n\tdisplay: block;\n\tmargin: 20px auto 20px auto;\n\twidth: 280px;\n\theight: 50px;\n\tbackground: #fff;\n\tbox-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n\tborder: none;\n\tfont-size: 18px;\n\ttext-align: center;\n\toutline: 0;\n"]))),ot=f.b.select(l||(l=Object(j.a)(["\n\tdisplay: block;\n\tmargin: 20px auto 20px auto;\n\twidth: 280px;\n\theight: 50px;\n\tbackground: #fff;\n\tbox-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n\tborder: none;\n\tfont-size: 18px;\n\ttext-align: center;\n\toutline: 0;\n"]))),it=f.b.button(b||(b=Object(j.a)(["\n\tdisplay: block;\n\twidth: 280px;\n\tmargin: 0 auto;\n\tpadding: 5px 20px;\n\theight: 40px;\n\tbackground: ",";\n\tcolor: white;\n\tborder: none;\n\toutline: none;\n\tborder-radius: 5px;\n"])),(function(t){return t.disabled?"grey":"#26b8ff"}));function st(t){var e=Object(u.useState)("Food"),n=Object(y.a)(e,2),c=n[0],r=n[1],a=Object(u.useState)(""),o=Object(y.a)(a,2),i=o[0],s=o[1],d=Object(u.useState)(_()().format("l")),l=Object(y.a)(d,1)[0],b=Object(u.useState)(""),j=Object(y.a)(b,2),p=j[0],h=j[1],O=Object(u.useState)((new Date).getTime()),x=Object(y.a)(O,1)[0],f=Object(g.c)((function(t){return t.homeReducer.display})),m=Object(g.b)(),v=Object(g.c)((function(t){return t.category.categories}));return Object(N.jsx)(tt,{display:f,children:Object(N.jsx)(et,{children:Object(N.jsx)(nt,{children:Object(N.jsxs)("form",{action:"#",children:[Object(N.jsx)(ct,{onClick:function(){m(q())},children:"\xd7"}),Object(N.jsxs)(rt,{children:["Add ",t.target]}),Object(N.jsx)(ot,{onChange:function(t){r(t.target.value)},value:c,required:!0,name:"category",children:v.map((function(t){return Object(N.jsx)("option",{children:t.name},t.id)}))}),Object(N.jsx)(at,{onChange:function(t){s(t.target.value)},value:i,required:!0,placeholder:"Description",name:"description",type:"text"}),Object(N.jsx)(at,{readOnly:!0,value:l,name:"date",type:"text"}),Object(N.jsx)(at,{onChange:function(t){h(t.target.value)},value:p,required:!0,placeholder:"Money",name:"money",type:"number"}),Object(N.jsx)(it,{disabled:!p,onClick:function(e){e.preventDefault(),m(q()),m({type:I,payload:{category:c,description:i,date:l,money:p,milliseconds:x},target:t.target})},children:"Add"})]})})})})}var dt=f.b.div(J||(J=Object(j.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1050;\n\tdisplay: ",";\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n"])),(function(t){return t.display})),lt=f.b.div(W||(W=Object(j.a)(["\n\tmax-width: 500px;\n\tmargin: 40px auto;\n"]))),bt=f.b.div(Z||(Z=Object(j.a)(["\n\tposition: relative;\n\twidth: 100%;\n\tpadding: 40px;\n\tbackground-color: #fff;\n\tborder: 1px solid rgba(0, 0, 0, 0.2);\n\tborder-radius: 4px;\n\tmax-height: 80vh;\n\toverflow-y: auto;\n"]))),jt=f.b.div(Y||(Y=Object(j.a)(["\n\tposition: absolute;\n\ttop: 8px;\n\tright: 14px;\n\tfont-size: 30px;\n\tcolor: #000;\n\topacity: 0.5;\n\tfont-weight: 700;\n\tborder: none;\n\tbackground-color: transparent;\n\tcursor: pointer;\n"]))),ut=f.b.div($||($=Object(j.a)(["\n\ttext-align: center;\n\tfont-size: 22px;\n\ttext-transform: uppercase;\n"]))),pt=f.b.input(K||(K=Object(j.a)(["\n\tdisplay: block;\n\tmargin: 20px auto 20px auto;\n\twidth: 280px;\n\theight: 50px;\n\tbackground: #fff;\n\tbox-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n\tborder: none;\n\tfont-size: 18px;\n\ttext-align: center;\n\toutline: 0;\n"]))),ht=f.b.select(Q||(Q=Object(j.a)(["\n\tdisplay: block;\n\tmargin: 20px auto 20px auto;\n\twidth: 280px;\n\theight: 50px;\n\tbackground: #fff;\n\tbox-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n\tborder: none;\n\tfont-size: 18px;\n\ttext-align: center;\n\toutline: 0;\n"]))),Ot=f.b.button(X||(X=Object(j.a)(["\n\tdisplay: block;\n\twidth: 280px;\n\tmargin: 0 auto;\n\tpadding: 5px 20px;\n\theight: 40px;\n\tbackground: ",";\n\tcolor: white;\n\tborder: none;\n\toutline: none;\n\tborder-radius: 5px;\n"])),(function(t){return t.disabled?"grey":"#26b8ff"}));function gt(t){var e=Object(g.c)((function(t){return t.homeReducer.targetItem})),n=Object(u.useState)(e.category),c=Object(y.a)(n,2),r=c[0],a=c[1],o=Object(u.useState)(e.description),i=Object(y.a)(o,2),s=i[0],d=i[1],l=Object(u.useState)(e.date),b=Object(y.a)(l,1)[0],j=Object(u.useState)(e.money),p=Object(y.a)(j,2),h=p[0],O=p[1],x=Object(g.c)((function(t){return t.homeReducer.displayEdit})),f=Object(g.b)(),m=Object(g.c)((function(t){return t.category.categories}));return Object(N.jsx)(dt,{display:x,children:Object(N.jsx)(lt,{children:Object(N.jsx)(bt,{children:Object(N.jsxs)("form",{action:"#",children:[Object(N.jsx)(jt,{onClick:function(){f(H())},children:"\xd7"}),Object(N.jsxs)(ut,{children:["Edit ",t.target]}),Object(N.jsx)(ht,{onChange:function(t){a(t.target.value)},value:r,required:!0,name:"category",children:m.map((function(t){return Object(N.jsx)("option",{children:t.name},t.id)}))}),Object(N.jsx)(pt,{onChange:function(t){d(t.target.value)},value:s,required:!0,placeholder:"Description",name:"description",type:"text"}),Object(N.jsx)(pt,{readOnly:!0,value:b,name:"date",type:"text"}),Object(N.jsx)(pt,{onChange:function(t){O(t.target.value)},value:h,required:!0,placeholder:"Money",name:"money",type:"number"}),Object(N.jsxs)(Ot,{disabled:!h,onClick:function(e){e.preventDefault(),f(H()),f({type:T,payload:{category:r,description:s,date:b,money:h},target:t.target})},children:["Update ",t.target]})]})})})})}var xt,ft,mt,yt,vt,wt,Dt,kt,Ct,Mt,St,At,Bt,Rt,It,Tt,zt,Et,Ft=n(46),Pt=(n(69),f.b.div(xt||(xt=Object(j.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 50px;\n    border-top: 1px solid #cacaca;\n    border-bottom: 1px solid #cacaca;\n    padding: 10px 20px;\n    margin-top: 15px; \n    color: grey;\n"])))),_t=f.b.div(ft||(ft=Object(j.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n\n"]))),Lt=f.b.div(mt||(mt=Object(j.a)(["\n\n"]))),Gt=f.b.input(yt||(yt=Object(j.a)(["\n\twidth: 100px;\n    padding: 5px;\n    margin: 0 10px;\n\tbox-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n\tborder: none;\n\tfont-size: 14px;\n\ttext-align: center;\n\toutline: 0;\n"]))),qt=f.b.span(vt||(vt=Object(j.a)(["\n    width: 50px;\n    font-size: 14px;\n    font-weight: 500;\n    display: inline-block;\n    margin: 15px 10px 15px 0;  \n    color: #5f5f5f;\n"]))),Ht=f.b.select(wt||(wt=Object(j.a)(["\n    font-size: 14px;\n    padding: 5px;\n    margin: 0 10px;\n    border: none;\n    outline: none;\n    color: #5f5f5f;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n"]))),Nt=f.b.button(Dt||(Dt=Object(j.a)(["\n    height: 40px;\n    padding: 0 20px;\n    background: #277297;\n    color: white;\n    border: none;\n    outline: none;\n    border-radius: 5px;\n"]))),Ut=f.b.button(kt||(kt=Object(j.a)(["\n    padding: 5px;\n    margin: 0 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n    font-size: 14px;\n    color: #5f5f5f;\n\ttext-align: center;\n    border: none;\n    outline: none;\n    border-radius: 5px;\n    background-color: white;\n"]))),Vt=Object(f.b)(Ft.a)(Ct||(Ct=Object(j.a)(["\n    position: absolute;\n    display: ",";\n"])),(function(t){return t.display?"block":"none"}));function Jt(t){var e=Object(g.b)(),n=Object(g.c)((function(t){return t.homeReducer.chargesDB})),c=Object(g.c)((function(t){return t.homeReducer.targetItem})),r=Object(g.c)((function(t){return t.category.categories})),a=Object(u.useState)(""),o=Object(y.a)(a,2),i=o[0],s=o[1],d=Object(u.useState)(""),l=Object(y.a)(d,2),b=l[0],j=l[1],p=Object(u.useState)(""),h=Object(y.a)(p,2),O=h[0],x=h[1],f=Object(u.useState)(""),m=Object(y.a)(f,2),w=m[0],D=m[1],k=Object(u.useState)(),C=Object(y.a)(k,2),M=C[0],S=C[1],A=Object(u.useState)(),B=Object(y.a)(A,2),R=B[0],I=B[1],T=Object(v.a)(n);return T=i?T.sort((function(t,e){return"true"===i?t.category>e.category?1:-1:t.category<e.category?1:-1})):b?T.sort((function(t,e){return"true"===b?t.money-e.money:e.money-t.money})):Object(v.a)(n),T=O&&w?n.filter((function(t){return t.category===O&&t.money<=w})):O?n.filter((function(t){return t.category===O})):w?n.filter((function(t){return t.money<=w})):T,T=M?T.filter((function(t){return M.getMonth()===new Date(t.milliseconds).getMonth()})):T,T=R?T.filter((function(t){return R[0].getDate()<=new Date(t.milliseconds).getDate()&&R[1].getDate()>=new Date(t.milliseconds).getDate()})):T,Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(_t,{children:[Object(N.jsxs)(Lt,{children:[Object(N.jsx)(qt,{children:"Filter: "}),Object(N.jsxs)(Ht,{value:O,onChange:function(t){x(t.target.value)},children:[" ",Object(N.jsx)("option",{value:"",children:"Select category"}),r.map((function(t){return Object(N.jsx)("option",{children:t.name},t.id)}))]}),Object(N.jsx)(Gt,{onChange:function(t){D(t.target.value)},value:w,placeholder:"Money",name:"money",type:"number"}),Object(N.jsx)(Ut,{onClick:function(){return t.setDisplay(!t.display)},children:"Select date"}),Object(N.jsx)(Ut,{onClick:function(){S(),I()},children:"Reset date"}),Object(N.jsx)(Vt,{display:t.display,returnValue:"range",selectRange:!0,onChange:function(t){I(t)},onClickMonth:function(t){I(),S(t)},maxDate:new Date,defaultView:"year"})]}),Object(N.jsx)(Nt,{onClick:function(){e(G())},children:"Add more"})]}),Object(N.jsx)(_t,{children:Object(N.jsxs)(Lt,{children:[Object(N.jsx)(qt,{children:"Sort: "}),Object(N.jsxs)(Ht,{onChange:function(t){s(t.target.value)},children:[Object(N.jsx)("option",{value:"",children:"---"}),Object(N.jsx)("option",{value:!0,children:"A - Z"}),Object(N.jsx)("option",{value:!1,children:"Z - A"})]}),Object(N.jsxs)(Ht,{onChange:function(t){j(t.target.value)},children:[Object(N.jsx)("option",{value:"",children:"---"}),Object(N.jsx)("option",{value:!0,children:"From lower"}),Object(N.jsx)("option",{value:!1,children:"From higher"})]})]})}),Object(N.jsxs)(Pt,{children:[Object(N.jsx)("span",{children:"Category"}),Object(N.jsx)("span",{children:"Description"}),Object(N.jsx)("span",{children:"Date"}),Object(N.jsx)("span",{children:"Money"}),Object(N.jsx)("span",{children:"Action"})]}),Object(N.jsx)("div",{children:T.map((function(t,e,n){return Object(N.jsx)(V,{removeId:e,data:t,arr:n,target:"charges"},e)}))}),Object(N.jsx)(st,{target:"charges"}),c?Object(N.jsx)(gt,{target:"charges"}):null]})}var Wt,Zt,Yt=f.b.div(Mt||(Mt=Object(j.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 50px;\n    border-top: 1px solid #cacaca;\n    border-bottom: 1px solid #cacaca;\n    padding: 10px 20px;\n    margin-top: 15px; \n    color: grey;\n"]))),$t=f.b.div(St||(St=Object(j.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n"]))),Kt=f.b.div(At||(At=Object(j.a)(["\n\n"]))),Qt=f.b.input(Bt||(Bt=Object(j.a)(["\n\twidth: 100px;\n    padding: 5px;\n    margin: 0 10px;\n\tbox-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n\tborder: none;\n\tfont-size: 14px;\n\ttext-align: center;\n\toutline: 0;\n"]))),Xt=f.b.span(Rt||(Rt=Object(j.a)(["\n    width: 50px;\n    font-size: 14px;\n    font-weight: 500;\n    display: inline-block;\n    margin: 15px 10px 15px 0;  \n    color: #5f5f5f;\n"]))),te=f.b.select(It||(It=Object(j.a)(["\n    font-size: 14px;\n    padding: 5px;\n    margin: 0 10px;\n    border: none;\n    outline: none;\n    color: #5f5f5f;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n"]))),ee=f.b.button(Tt||(Tt=Object(j.a)(["\n    height: 40px;\n    padding: 0 20px;\n    background: #277297;\n    color: white;\n    border: none;\n    outline: none;\n    border-radius: 5px;\n"]))),ne=f.b.button(zt||(zt=Object(j.a)(["\n    padding: 5px;\n    margin: 0 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n    font-size: 14px;\n    color: #5f5f5f;\n\ttext-align: center;\n    border: none;\n    outline: none;\n    border-radius: 5px;\n    background-color: white;\n"]))),ce=Object(f.b)(Ft.a)(Et||(Et=Object(j.a)(["\n    position: absolute;\n    display: ",";\n"])),(function(t){return t.display?"block":"none"}));function re(t){var e=Object(g.b)(),n=Object(g.c)((function(t){return t.homeReducer.incomesDB})),c=Object(g.c)((function(t){return t.homeReducer.targetItem})),r=Object(g.c)((function(t){return t.category.categories})),a=Object(u.useState)(""),o=Object(y.a)(a,2),i=o[0],s=o[1],d=Object(u.useState)(""),l=Object(y.a)(d,2),b=l[0],j=l[1],p=Object(u.useState)(""),h=Object(y.a)(p,2),O=h[0],x=h[1],f=Object(u.useState)(""),m=Object(y.a)(f,2),w=m[0],D=m[1],k=Object(u.useState)(),C=Object(y.a)(k,2),M=C[0],S=C[1],A=Object(u.useState)(),B=Object(y.a)(A,2),R=B[0],I=B[1],T=Object(v.a)(n);return T=i?T.sort((function(t,e){return"true"===i?t.category>e.category?1:-1:t.category<e.category?1:-1})):b?T.sort((function(t,e){return"true"===b?t.money-e.money:e.money-t.money})):Object(v.a)(n),T=O&&w?n.filter((function(t){return t.category===O&&t.money<=w})):O?n.filter((function(t){return t.category===O})):w?n.filter((function(t){return t.money<=w})):T,T=M?T.filter((function(t){return M.getMonth()===new Date(t.milliseconds).getMonth()})):T,T=R?T.filter((function(t){return R[0].getDate()<=new Date(t.milliseconds).getDate()&&R[1].getDate()>=new Date(t.milliseconds).getDate()})):T,Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)($t,{children:[Object(N.jsxs)(Kt,{children:[Object(N.jsx)(Xt,{children:"Filter: "}),Object(N.jsxs)(te,{value:O,onChange:function(t){x(t.target.value)},children:[" ",Object(N.jsx)("option",{value:"",children:"Select category"}),r.map((function(t){return Object(N.jsx)("option",{children:t.name},t.id)}))]}),Object(N.jsx)(Qt,{onChange:function(t){D(t.target.value)},value:w,required:!0,placeholder:"Money",name:"money",type:"number"}),Object(N.jsx)(ne,{onClick:function(){return t.setDisplay(!t.display)},children:"Select date"}),Object(N.jsx)(ne,{onClick:function(){S(),I()},children:"Reset date"}),Object(N.jsx)(ce,{display:t.display,returnValue:"range",selectRange:!0,onChange:function(t){I(t)},onClickMonth:function(t){I(),S(t)},maxDate:new Date,defaultView:"year"})]}),Object(N.jsx)(ee,{onClick:function(){e(G())},children:"Add more"})]}),Object(N.jsx)($t,{children:Object(N.jsxs)(Kt,{children:[Object(N.jsx)(Xt,{children:"Sort: "}),Object(N.jsxs)(te,{onChange:function(t){s(t.target.value)},children:[Object(N.jsx)("option",{value:"",children:"---"}),Object(N.jsx)("option",{value:!0,children:"A - Z"}),Object(N.jsx)("option",{value:!1,children:"Z - A"})]}),Object(N.jsxs)(te,{onChange:function(t){j(t.target.value)},children:[Object(N.jsx)("option",{value:"",children:"---"}),Object(N.jsx)("option",{value:!0,children:"From lower"}),Object(N.jsx)("option",{value:!1,children:"From higher"})]})]})}),Object(N.jsxs)(Yt,{children:[Object(N.jsx)("span",{children:"Category"}),Object(N.jsx)("span",{children:"Description"}),Object(N.jsx)("span",{children:"Date"}),Object(N.jsx)("span",{children:"Money"}),Object(N.jsx)("span",{children:"Action"})]}),T.map((function(t,e,n){return Object(N.jsx)(V,{removeId:e,data:t,arr:n,target:"incomes"},e)})),Object(N.jsx)(st,{target:"incomes"}),c?Object(N.jsx)(gt,{target:"incomes"}):null]})}var ae=f.b.div(Wt||(Wt=Object(j.a)(["\n\tdisplay: flex;\n\tmargin-top: 20px;\n"]))),oe=Object(f.b)(O.b)(Zt||(Zt=Object(j.a)(["\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 200px;\n\ttext-decoration: none;\n\tcolor: '#000000';\n\ttext-align: center;\n\tpadding: 5px;\n\n\t:hover {\n\t\tcolor: #26b8ff;\n\t\t&:after {\n\t\t\twidth: 180px;\n\t\t\tleft: 10px;\n\t\t}\n\t}\n\t&.active {\n\t\tcolor: #26b8ff;\n\t\t&:after {\n\t\t\twidth: 180px;\n\t\t\tleft: 10px;\n\t\t}\n\t}\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 30px;\n\t\tleft: 100px;\n\t\twidth: 0px;\n\t\theight: 1px;\n\t\tbackground-color: #26b8ff;\n\t\ttransition: all .4s linear;\n\n\t}\n"])));var ie,se,de,le,be=function(){var t=Object(x.g)(),e=Object(u.useState)(!1),n=Object(y.a)(e,2),c=n[0],r=n[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(ae,{children:[Object(N.jsx)(oe,{to:"".concat(t.url,"/charges"),children:"Charges"}),Object(N.jsx)(oe,{to:"".concat(t.url,"/incomes"),children:"Incomes"})]}),Object(N.jsx)(x.b,{path:"".concat(t.path,"/charges"),children:Object(N.jsx)(Jt,{display:c,setDisplay:r})}),Object(N.jsx)(x.b,{path:"".concat(t.path,"/incomes"),children:Object(N.jsx)(re,{display:c,setDisplay:r})})]})},je=n(30),ue=f.b.div(ie||(ie=Object(j.a)(["\n\tdisplay: flex;\n\tflex-direction: ",";\n\talign-items: ",";\n\tjustify-content: ",";\n\tmargin: ",";\n\twidth: ",";\n\theight: ",";\n\tflex-wrap: ",";\n"])),(function(t){return t.direction||"row"}),(function(t){return t.align||"stretch"}),(function(t){return t.justify||"stretch"}),(function(t){return t.margin||"0"}),(function(t){return t.width||"100%"}),(function(t){return t.height||"100%"}),(function(t){return t.wrap||""}));function pe(t){return Object(N.jsx)(ue,Object(F.a)({},t))}var he,Oe=Object(f.b)(pe)(se||(se=Object(j.a)(["\n  margin-bottom: 15px;\n  background-color: rgba(41,126,166,0.2);\n  height: 45vh;\n  color: black;\n"]))),ge=Object(f.b)(pe)(de||(de=Object(j.a)(["\n  padding: 5px;\n  background-color: rgb(41,126,166,0.2);\n  justify-content: flex-end;\n"]))),xe=f.b.div(le||(le=Object(j.a)(["\n\tpadding: 5px;\n  color: rgba(132,125,115,1);\n"]))),fe=function(t){var e=t.chargesData,n=t.incomeData,c=t.dates,r=Object(v.a)(c),a=r;var o={labels:a,datasets:[{label:"Income",fill:!1,lineTension:.5,backgroundColor:"rgba(253,178,1,1)",borderColor:"rgba(253,178,1,1)",borderWidth:2,data:n},{label:"Expenses",fill:!1,lineTension:.5,backgroundColor:"rgba(0,16,28,1)",borderColor:"rgba(0,16,28,1)",borderWidth:2,data:e}]};return console.log(a),Object(N.jsxs)("div",{children:[Object(N.jsxs)(ge,{children:[Object(N.jsxs)(xe,{children:[" filter from date:",Object(N.jsx)("input",{type:"date",id:"start-filter-interval",onChange:function(t){!function(t){var e=t.target.value,n=new Date(e).getTime(),c=r.map((function(t){return new Date(t).getTime()})),o=c.filter((function(t){return t>n})),i=c.indexOf(o[0]);-1!==i&&(a=r.slice(i),console.log(a))}(t)}})]}),Object(N.jsxs)(xe,{children:[" filter to date:",Object(N.jsx)("input",{type:"date",id:"end-filter-interval",onChange:function(t){!function(t){var e=t.target.value,n=new Date(e).getTime(),r=Object(v.a)(c).map((function(t){return new Date(t).getTime()})),a=r.filter((function(t){return t<n})).reverse(),o=r.indexOf(a[0]);console.log(o)}(t)}})]})]}),Object(N.jsx)(Oe,{children:Object(N.jsx)(je.b,{data:o,options:{plugins:{title:{display:!0,text:"click to disable category"},legend:{display:!0,position:"top"}},maintainAspectRatio:!1}})})]})},me=Object(f.b)(pe)(he||(he=Object(j.a)(["\n  &:hover {\n    background-color: rgba(132,125,115,0.1)\n  }\n"])));function ye(){var t=360*Math.random(),e=40*Math.random()+60,n=40*Math.random()+40;return"hsl(".concat(t,", ").concat(e,"%, ").concat(n,"%)")}var ve,we,De,ke,Ce=function(t){var e=t.incomeLabels,n=t.incomeData;var c={labels:e,datasets:[{label:"Income by category",data:n,backgroundColor:function(){for(var t=[],n=0;n<e.length;n++)t=[].concat(Object(v.a)(t),[ye()]);return t}()}]};return Object(N.jsx)(me,{children:Object(N.jsx)(je.a,{data:c,options:{plugins:{legend:{display:!1,position:"bottom"},title:{display:!0,text:"Income by category",fontSize:20},responsive:!0},maintainAspectRatio:!1}})})},Me=Object(f.b)(pe)(ve||(ve=Object(j.a)(["\n  &:hover {\n    background-color: rgba(132,125,115,0.1)\n  }\n"]))),Se=function(t){var e=t.chargesLabels,n=t.chargesData;function c(){var t=360*Math.random(),e=40*Math.random()+60,n=40*Math.random()+40;return"hsl(".concat(t,", ").concat(e,"%, ").concat(n,"%)")}var r={labels:e,datasets:[{label:"Charges by category",data:n,backgroundColor:function(){for(var t=[],n=0;n<e.length;n++)t=[].concat(Object(v.a)(t),[c()]);return t}()}]};return Object(N.jsx)(Me,{children:Object(N.jsx)(je.c,{data:r,height:200,options:{plugins:{title:{display:!0,text:"Charges by category",fontSize:20},legend:{display:!0,position:"bottom"}},maintainAspectRatio:!1}})})},Ae=Object(f.b)(pe)(we||(we=Object(j.a)(["\n  flex-direction:column;\n  background-color: rgba(41,126,166, 0.3)\n"]))),Be=function(){for(var t=Object(g.c)((function(t){return t.homeReducer.chargesDB})),e=Object(g.c)((function(t){return t.homeReducer.incomesDB})),n=[],c=[],r=[],a=0;a<t.length;a++)n=[].concat(Object(v.a)(n),[+t[a].money]),c=[].concat(Object(v.a)(c),[t[a].category]),r=[].concat(Object(v.a)(r),[t[a].date]);for(var o=[],i=[],s=[],d=0;d<e.length;d++)o=[].concat(Object(v.a)(o),[+e[d].money]),i=[].concat(Object(v.a)(i),[e[d].category]),s=[].concat(Object(v.a)(s),[e[d].date]);var l=[];l=(l=r.concat(s)).map((function(t){return new Date(t).getTime()})).sort((function(t,e){return t-e}));for(var b=Object(v.a)(new Set(l)).map((function(t){return new Date(t).toLocaleDateString()})),j=[],u=[],p=0;p<b.length;p++){for(var h=0;h<s.length;h++){var O=0;e[h].date===b[p]&&(O=e[h].money+O,j[p]=O)}for(var x=0;x<r.length;x++){var f=0;t[x].date===b[p]&&(f=t[x].money+f,u[p]=f)}}for(var m=Object(v.a)(new Set(i)),y=Object(v.a)(new Set(c)),w=[],D=[],k=0;k<i.length;k++)for(var C=0;C<o.length;C++)if(e[C].category===m[k]){var M=0;M=+e[C].money+M,w[k]=M,console.log(w)}for(var S=0;S<y.length;S++)for(var A=0;A<n.length;A++){var B=0;t[A].category===y[S]&&(B=+t[A].money+B,D[S]=B)}return Object(N.jsx)("div",{children:Object(N.jsxs)(Ae,{children:[Object(N.jsx)(fe,{chargesData:u,incomeData:j,dates:b}),Object(N.jsxs)(pe,{children:[Object(N.jsx)(Ce,{incomeLabels:m,incomeData:w}),Object(N.jsx)(Se,{chargesLabels:y,chargesData:D})]})]})})},Re=f.b.span(De||(De=Object(j.a)(["\n\tcolor: ",";\n\tfont-weight: 300;\n\tfont-size: 2em;\n\ttext-align: ",";\n\tmargin: ",";\n"])),(function(t){return t.color||"black"}),(function(t){return t.align||"center"}),(function(t){return t.margin||"0"}));function Ie(t){return Object(N.jsx)(Re,Object(F.a)({},t))}var Te=f.b.button(ke||(ke=Object(j.a)(["\n\twidth: ",";\n\theight: ",";\n\tbackground-color: ",";\n\tcolor: ",";\n\tfont-weight: 500;\n\tpadding: ",";\n\tborder-radius: ",";\n\tborder: none;\n\tcursor: pointer;\n\tmargin: ",";\n\t&:focus {\n\t\tbackground-color: #182bcd;\n\t}\n"])),(function(t){return t.width||"100px"}),(function(t){return t.height||"40px"}),(function(t){return t.bColor||"rgb(90,\t141,\t238\t)"}),(function(t){return t.color||"white"}),(function(t){return t.padding||"2px"}),(function(t){return t.bRadius||"5px"}),(function(t){return t.margin||0}));function ze(t){return Object(N.jsx)(Te,Object(F.a)({type:t.type},t))}var Ee,Fe,Pe={categories:[{id:Math.trunc(Math.random()*Date.now()),name:"Food",icon:k.Food,description:"For all my food",date:"21 Jul",standard:!0},{id:Math.trunc(Math.random()*Date.now()),name:"Clothes",icon:k.Clothes,description:"Clothing costs",date:"9 Jun",standard:!0},{id:Math.trunc(Math.random()*Date.now()),name:"Restaurants",icon:k.Restaurants,description:"The cost of going to the restaurant",date:"17 Dec",standard:!0},{id:Math.trunc(Math.random()*Date.now()),name:"UtilityBills",icon:k.UtilityBills,description:"Who invented the water bills?",date:"14 Nov",standard:!0},{id:Math.trunc(Math.random()*Date.now()),name:"Pets",icon:k.Pets,description:"Shopping for a tailed friend",date:"21 Oct",standard:!0},{id:Math.trunc(Math.random()*Date.now()),name:"Travel",icon:k.Travel,description:"Money spent on travel",date:"21 Oct",standard:!0},{id:Math.trunc(Math.random()*Date.now()),name:"Health",icon:k.Health,description:"Charges for for your health",date:"21 Oct",standard:!0},{id:Math.trunc(Math.random()*Date.now()),name:"Salary",icon:k.Salary,description:"Salary",date:"21 Oct",standard:!0},{id:Math.trunc(Math.random()*Date.now()),name:"Bonus",icon:k.Bonus,description:"Bonus",date:"21 Oct",standard:!0},{id:Math.trunc(Math.random()*Date.now()),name:"Gift",icon:k.Gift,description:"Gift",date:"21 Oct",standard:!0}]},_e=f.b.div(Ee||(Ee=Object(j.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr 50px;\n\tborder-top: ",";\n\tborder-bottom: ",";\n\tmargin: ",";\n\tpadding: 10px 20px;\n"])),(function(t){return t.border?"1px solid #cacaca":"none"}),(function(t){return t.border?"1px solid #cacaca":"none"}),(function(t){return t.margin||"0"}));function Le(t){return Object(N.jsx)(_e,Object(F.a)({},t))}var Ge,qe=f.b.span(Fe||(Fe=Object(j.a)(["\n\tmargin: ",";\n"])),(function(t){return t.margin||0}));function He(t){return Object(N.jsx)(qe,Object(F.a)({},t))}var Ne=f.b.span(Ge||(Ge=Object(j.a)(["\n\tcolor: ",";\n\ttext-decoration: ",";\n\tfont-size: ",";\n\twidth: ",";\n\theight: ",";\n\tmargin: ",";\n\ttext-align: ",";\n\tcursor: ",";\n\tdisplay: ",";\n"])),(function(t){return t.color||"black"}),(function(t){return t.decoration||"none"}),(function(t){return t.fSize||"1em"}),(function(t){return t.width||"100%"}),(function(t){return t.height||"100%"}),(function(t){return t.margin||"0"}),(function(t){return t.textAlign||"start"}),(function(t){return t.cursor||""}),(function(t){return t.display||"inline"}));function Ue(t){return Object(N.jsx)(Ne,Object(F.a)({},t))}function Ve(t){var e=t.active,n=t.setActive,c=t.icons,r=t.category,a=Object(g.b)(),o=Object(u.useState)(r.name),i=Object(y.a)(o,2),s=i[0],d=i[1],l=Object(u.useState)(r.description),b=Object(y.a)(l,2),j=b[0],p=b[1],h=Object(u.useState)(r.icon),O=Object(y.a)(h,2),x=O[0],f=O[1],m=Object(u.useState)(""),v=Object(y.a)(m,2),D=v[0],C=v[1],M=c.faTrashAlt,A=c.faPen,B=[];function R(t){"name"===t.target.name?d(t.target.value):"description"===t.target.name&&p(t.target.value)}function I(t){var e;t.preventDefault(),s&&x?(a((e={id:r.id,name:s,icon:x,description:j},{type:S,payload:{id:e.id,name:e.name,icon:k[e.icon],description:e.description,date:_()().format("DD MMM"),standard:!1}})),n(!1)):s||x?s?x||C("Please, choose some icon \ud83d\udc7d"):C("Please, enter name \ud83e\uddd0"):C("Please, choose some icon \ud83d\udc7d and enter some name \ud83e\uddd0")}for(var T=function(){var t=Object(y.a)(E[z],2),e=t[0],n=t[1];n!==M&&n!==A&&B.push(Object(N.jsx)(pe,{width:"20%",margin:"8px",justify:"center",children:Object(N.jsx)(ze,{onClick:function(t){t.preventDefault(),f(e)},children:Object(N.jsx)(w.a,{name:e,icon:n})})},e))},z=0,E=Object.entries(c);z<E.length;z++)T();return Object(N.jsx)(tt,{display:e?"block":"none",children:Object(N.jsx)(et,{children:Object(N.jsx)(pe,{margin:"auto 20px",children:Object(N.jsxs)(nt,{children:[Object(N.jsx)(ct,{onClick:function(){return n(!1)},children:"\xd7"}),Object(N.jsxs)("form",{children:[Object(N.jsx)(Ue,{children:D}),Object(N.jsx)(at,{onChange:function(t){return R(t)},placeholder:"Name",name:"name",value:s}),Object(N.jsx)(at,{onChange:function(t){return R(t)},placeholder:"Description",name:"description",value:j}),Object(N.jsx)(pe,{justify:"space-around",width:"60%",margin:"20px auto",wrap:"wrap",children:B}),Object(N.jsx)(pe,{children:Object(N.jsx)(ze,{onClick:function(t){return I(t)},width:"80%",margin:"0 auto",children:"Save changes"})})]})]})})})})}function Je(t){var e=Object(g.b)(),n=Object(u.useState)(!1),c=Object(y.a)(n,2),r=c[0],a=c[1];function o(t){e({type:M,payload:t})}var i=null,s=null;t.standard||(i=Object(N.jsx)(w.a,{onClick:function(){return o(t.id)},icon:D.m,style:{cursor:"pointer"}}),s=Object(N.jsx)(w.a,{onClick:function(){return a(!0)},icon:D.k,style:{cursor:"pointer"}}));var d=Object(F.a)({},t);return Object(N.jsxs)(Le,{children:[Object(N.jsxs)(He,{children:[Object(N.jsx)(w.a,{icon:t.icon}),Object(N.jsx)(Ue,{margin:"10px",children:t.name})]}),Object(N.jsx)(He,{children:t.description}),Object(N.jsx)(He,{children:t.date}),Object(N.jsxs)(He,{children:[Object(N.jsx)(He,{children:s}),Object(N.jsx)(He,{margin:"10px",children:i})]}),Object(N.jsx)(Ve,{active:r,setActive:a,icons:k,category:d})]})}function We(t){var e=t.active,n=t.setActive,c=t.icons,r=Object(g.b)(),a=Object(u.useState)(""),o=Object(y.a)(a,2),i=o[0],s=o[1],d=Object(u.useState)(""),l=Object(y.a)(d,2),b=l[0],j=l[1],p=Object(u.useState)(""),h=Object(y.a)(p,2),O=h[0],x=h[1],f=Object(u.useState)(""),m=Object(y.a)(f,2),v=m[0],D=m[1],M=c.faTrashAlt,S=c.faPen,A=[];function B(t){"name"===t.target.name?j(t.target.value):"description"===t.target.name&&x(t.target.value)}function R(t){var e;t.preventDefault(),b&&i?(r((e={name:b,icon:i,description:O},{type:C,payload:{id:Math.trunc(Math.random()*Date.now()),name:e.name,icon:k[e.icon],description:e.description,date:_()().format("DD MMM"),standard:!1}})),n(!1),D(""),j(""),x(""),s("")):b||i?b?i||D("Please, choose some icon \ud83d\udc7d"):D("Please, enter name \ud83e\uddd0"):D("Please, choose some icon \ud83d\udc7d and enter some name \ud83e\uddd0")}for(var I=function(){var t=Object(y.a)(z[T],2),e=t[0],n=t[1];n!==M&&n!==S&&A.push(Object(N.jsx)(pe,{width:"20%",margin:"8px",justify:"center",children:Object(N.jsx)(ze,{onClick:function(t){t.preventDefault(),s(e)},children:Object(N.jsx)(w.a,{name:e,icon:n})})},e))},T=0,z=Object.entries(c);T<z.length;T++)I();return Object(N.jsx)(tt,{display:e?"block":"none",children:Object(N.jsx)(et,{children:Object(N.jsx)(pe,{margin:"auto 20px",children:Object(N.jsxs)(nt,{children:[Object(N.jsx)(ct,{onClick:function(){return n(!1)},children:"\xd7"}),Object(N.jsxs)("form",{children:[Object(N.jsx)(Ue,{children:v}),Object(N.jsx)(at,{onChange:function(t){return B(t)},placeholder:"Name",name:"name",value:b}),Object(N.jsx)(at,{onChange:function(t){return B(t)},placeholder:"Description",name:"description",value:O}),Object(N.jsx)(pe,{justify:"space-around",width:"60%",margin:"20px auto",wrap:"wrap",children:A}),Object(N.jsx)(pe,{children:Object(N.jsx)(ze,{onClick:function(t){return R(t)},width:"80%",margin:"0 auto",children:"Add new category"})})]})]})})})})}function Ze(){var t=Object(u.useState)(!1),e=Object(y.a)(t,2),n=e[0],c=e[1],r=Object(g.c)((function(t){return t.category.categories}));return Object(N.jsxs)(pe,{width:"90%",margin:"auto",direction:"column",children:[Object(N.jsxs)(pe,{height:"3em",justify:"space-between",children:[Object(N.jsx)(Ie,{children:"Categories"}),Object(N.jsx)(ze,{onClick:function(){c(!0)},width:"10em",children:"Add more"})]}),Object(N.jsxs)(Le,{border:!0,margin:"20px 0",children:[Object(N.jsx)(He,{children:"Category"}),Object(N.jsx)(He,{children:"Description"}),Object(N.jsx)(He,{children:"Date"}),Object(N.jsx)(He,{children:"Action"})]}),Object(N.jsx)(pe,{direction:"column",children:r.map((function(t){return Object(u.createElement)(Je,Object(F.a)(Object(F.a)({},t),{},{key:t.id}))}))}),Object(N.jsx)(We,{active:n,setActive:c,icons:k})]})}function Ye(){return Object(N.jsx)(pe,{margin:"auto",justify:"center",align:"center",children:Object(N.jsx)(Ue,{textAlign:"center",margin:"20% auto",fSize:"4em",color:"black",children:"\ud83d\ude1e Page not found \ud83d\ude1e"})})}var $e,Ke,Qe,Xe,tn,en,nn,cn,rn=n.p+"static/media/low-poly-grid-haikei.c5b1fb6e.svg",an=f.b.div($e||($e=Object(j.a)(["\n\twidth: 100%;\n\tmin-height: 100vh;\n\tdisplay: flex;\n"]))),on=f.b.div(Ke||(Ke=Object(j.a)(["\n\twidth: 8%;\n\tmin-height: 100vh;\n\tbackground: #efefef;\n\tpadding: 50px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n"]))),sn=Object(f.b)(O.b)(Qe||(Qe=Object(j.a)(["\n\ttext-decoration: none;\n\tcolor: #5f5f5f;\n\tmargin: 5px;\n\t:hover {\n\t\tcolor: #26b8ff;\n\t}\n\t&.active {\n\t\tcolor: #26b8ff;\n\t}\n"]))),dn=f.b.img(Xe||(Xe=Object(j.a)(["\n\twidth: 100%;\n\theight: auto;\n"]))),ln=f.b.div(tn||(tn=Object(j.a)(["\n\twidth: 100%;\n"]))),bn=f.b.div(en||(en=Object(j.a)(["\n\tbackground-image: url(",");\n\tbackground-size:  cover;\n\tbackground-repeat: no-repeat;\n\theight: 150px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-end;\n\tjustify-content: center;\n\tcolor: white;\n"])),rn),jn=f.b.h3(nn||(nn=Object(j.a)(["\n\tmargin: 10px 20px;\n"]))),un=f.b.h2(cn||(cn=Object(j.a)(["\n\tmargin: 0 20px;\n"])));function pn(){var t=Object(g.c)((function(t){return t.homeReducer.chargesDB})),e=Object(g.c)((function(t){return t.homeReducer.incomesDB}));return Object(N.jsxs)(an,{children:[Object(N.jsxs)(on,{children:[Object(N.jsx)(dn,{src:m,alt:"logo"}),Object(N.jsx)(sn,{to:"/cursor-project",children:"Home"}),Object(N.jsx)(sn,{exact:!0,to:"/categories",children:"Categories"}),Object(N.jsx)(sn,{to:"/charts",children:"Charts"})]}),Object(N.jsxs)(ln,{children:[Object(N.jsxs)(bn,{children:[Object(N.jsx)(jn,{children:"Balance"}),Object(N.jsxs)(un,{children:["$ ",e.reduce((function(t,e){return+(t+parseFloat(e.money)).toFixed(2)}),0)-t.reduce((function(t,e){return+(t+parseFloat(e.money)).toFixed(2)}),0)," "]})]}),Object(N.jsxs)(x.d,{children:[Object(N.jsxs)(x.b,{path:"/cursor-project",children:[Object(N.jsx)(be,{}),Object(N.jsx)(x.a,{to:"/cursor-project/charges"})]}),Object(N.jsx)(x.b,{exact:!0,path:"/categories",component:Ze}),Object(N.jsx)(x.b,{path:"/charts",component:Be}),Object(N.jsx)(x.b,{exact:!0,path:"*",component:Ye})]})]})]})}var hn,On=n(22),gn=n(96),xn=Object(On.combineReducers)({category:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C:return Object(F.a)(Object(F.a)({},t),{},{categories:[].concat(Object(v.a)(t.categories),[e.payload])});case M:return Object(F.a)(Object(F.a)({},t),{},{categories:Object(v.a)(t.categories.filter((function(t){return t.id!==e.payload})))});case S:return Object(F.a)(Object(F.a)({},t),{},{categories:Object(v.a)(t.categories.map((function(t){return t.id===e.payload.id?e.payload:t})))});default:return t}},homeReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case B:return Object(F.a)(Object(F.a)({},t),{},{display:"block"});case A:return Object(F.a)(Object(F.a)({},t),{},{display:"none"});case z:return t.targetItem=e.targetItem,Object(F.a)(Object(F.a)({},t),{},{displayEdit:"block",editId:e.id,targetItem:t.targetItem});case E:return t.targetItem=void 0,Object(F.a)(Object(F.a)({},t),{},{displayEdit:"none"});case R:return"charges"===e.target?Object(F.a)(Object(F.a)({},t),{},{chargesDB:e.filteredArr}):Object(F.a)(Object(F.a)({},t),{},{incomesDB:e.filteredArr});case I:return"charges"===e.target?Object(F.a)(Object(F.a)({},t),{},{chargesDB:[].concat(Object(v.a)(t.chargesDB),[e.payload])}):Object(F.a)(Object(F.a)({},t),{},{incomesDB:[].concat(Object(v.a)(t.incomesDB),[e.payload])});case T:var n=e.payload,c=n.category,r=n.description,a=n.date,o=n.money;return"charges"===e.target?(t.chargesDB[t.editId]={category:c,description:r,date:a,money:o},Object(F.a)(Object(F.a)({},t),{},{chargesDB:Object(v.a)(t.chargesDB)})):(t.incomesDB[t.editId]={category:c,description:r,date:a,money:o},Object(F.a)(Object(F.a)({},t),{},{incomesDB:Object(v.a)(t.incomesDB)}));default:return t}}}),fn=n(66),mn=n(97),yn={key:"root",storage:n.n(mn).a},vn=Object(fn.a)(yn,xn),wn=n(98),Dn=Object(f.a)(hn||(hn=Object(j.a)(["\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"]))),kn=function(){var t=Object(On.createStore)(vn,Object(gn.composeWithDevTools)());return{store:t,persistor:Object(fn.b)(t)}}(),Cn=kn.store,Mn=kn.persistor;h.a.render(Object(N.jsxs)(g.a,{store:Cn,children:[Object(N.jsx)(Dn,{}),Object(N.jsx)(O.a,{children:Object(N.jsx)(wn.a,{loading:null,persistor:Mn,children:Object(N.jsx)(pn,{})})})]}),document.getElementById("root"))}},[[222,1,2]]]);
//# sourceMappingURL=main.c5823ca3.chunk.js.map