(this["webpackJsonpcontacts-app"]=this["webpackJsonpcontacts-app"]||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(10),r=a.n(c),o=(a(8),a(9),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))}),i=a(0);var h=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("header",{className:"App-header",children:"Contacts App"})})},l=a(7),d=a(2),j=a(3),u=a(5),m=a(4),p=function(e){var t=e.firstName,a=e.lastName,n=e.phone,s=e.gender,c="anon",r=s?c=s:c;return Object(i.jsxs)("div",{className:"Person",children:[Object(i.jsx)("p",{className:r}),Object(i.jsxs)("p",{className:"Name",children:[t," ",a]}),Object(i.jsx)("div",{className:"phone",children:n})]})},f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={searchText:""},e.changeSearchText=function(t){e.setState({searchText:t.target.value})},e.sortContacts=function(){""!==e.state.searchText&&(e.props.addSearchName(e.state.searchText),e.setState({searchText:""}))},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"Search",children:[Object(i.jsx)("input",{type:"text",placeholder:"Search contacts...",value:this.state.searchText,onChange:this.changeSearchText}),Object(i.jsx)("button",{type:"submit",onClick:this.sortContacts})]})}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={contacts:[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}],filteredContacts:[],search:[""]},e.addSearchName=function(t){e.setState({search:t});var a=e.state.contacts.filter((function(e){return e.lastName.toLowerCase().startsWith(t.toLowerCase())||e.firstName.toLowerCase().startsWith(t.toLowerCase())||e.phone.includes(t)}));e.setState({filteredContacts:a})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=""!==this.state.search[0]?this.state.filteredContacts:this.state.contacts;return console.log(this.state.search),Object(i.jsxs)("div",{className:"Contacts",children:[Object(i.jsx)(f,{addSearchName:this.addSearchName}),e.map((function(e){return Object(n.createElement)(p,Object(l.a)(Object(l.a)({},e),{},{key:e.index}))}))]})}}]),a}(n.Component);var N=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(h,{}),Object(i.jsx)(b,{})]})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),o()},8:function(e,t,a){},9:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.056238b3.chunk.js.map