(this.webpackJsonpmern_planner=this.webpackJsonpmern_planner||[]).push([[0],{161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),o=a.n(l),s=a(23),c=a(6),i=a(16),u=a(17),m=a(19),h=a(18),d=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement(s.b,{to:"/",className:"brand-logo"},"Planner"),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"Plans")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/create"},"Create Plan")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/user"},"Create User")))))}}]),a}(n.Component),p=a(7),E=a(12),b=a.n(E),v=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.plan.username),r.a.createElement("td",null,e.plan.description),r.a.createElement("td",null,e.plan.duration),r.a.createElement("td",null,e.plan.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(s.b,{to:"/edit/"+e.plan._id},"edit")," | ",r.a.createElement("a",{href:"#",onClick:function(){e.deletePlan(e.plan._id)}},"delete")))},g=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).deletePlan=n.deletePlan.bind(Object(p.a)(n)),n.state={plans:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/plans/").then((function(t){e.setState({plans:t.data})})).catch((function(e){return console.log("error",e)}))}},{key:"deletePlan",value:function(e){b.a.delete("http://localhost:5000/plans"+e).then((function(e){return console.log("response",e)})).catch((function(e){return console.log("error",e)})),this.setState({plans:this.state.exercises.filter((function(t){return t._id!==e}))})}},{key:"planList",value:function(){var e=this;return this.state.plans.map((function(t){return r.a.createElement(v,{plan:t,deletePlan:e.deletePlan,key:t._id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Logged Plans"),r.a.createElement("table",{className:"Table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Duration"),r.a.createElement("th",null,"Date"),r.a.createElement("td",null,"Actions"))),r.a.createElement("tbody",null,this.planList())))}}]),a}(n.Component),f=a(36),C=a.n(f),D=(a(66),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(p.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(p.a)(n)),n.onChangeDuration=n.onChangeDuration.bind(Object(p.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.state={username:"",description:"",duration:0,date:new Date,users:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/plans/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})})).catch((function(e){return console.log("error",e)})),b.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log("plan",t),b.a.post("http://localhost:5000/plans/update/"+this.props.match.params.id,t).then((function(e){return console.log("response",e)})).catch((function(e){return console.log("error",e)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit a plan"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col s6"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{required:!0,className:"browser-default form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return console.log("user",e),r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col s6"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Describe your plan",value:this.state.description,onChange:this.onChangeDescription}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col s6"},r.a.createElement("label",null,"Duration (in hours): "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"0",value:this.state.duration,onChange:this.onChangeDuration}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col s6"},r.a.createElement("label",null,"Date: "),r.a.createElement(C.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col s6"},r.a.createElement("input",{type:"submit",value:"Edit a plan",className:"btn btn-primary"})))))}}]),a}(n.Component)),y=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(p.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(p.a)(n)),n.onChangeDuration=n.onChangeDuration.bind(Object(p.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.state={username:"",description:"",duration:0,date:new Date,users:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log("plan",t),b.a.post("http://localhost:5000/plans/add",t).then((function(e){return console.log("response",e)})).catch((function(e){return console.log("error",e)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create a new plan"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col s6"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{required:!0,className:"browser-default form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return console.log("user",e),r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col s6"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Describe your plan",value:this.state.description,onChange:this.onChangeDescription}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col s6"},r.a.createElement("label",null,"Duration (in hours): "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"0",value:this.state.duration,onChange:this.onChangeDuration}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col s6"},r.a.createElement("label",null,"Date: "),r.a.createElement(C.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col s6"},r.a.createElement("input",{type:"submit",value:"Create a plan",className:"btn btn-primary"})))))}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.state={username:""},n}return Object(u.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log("user",t),b.a.post("http://localhost:5000/users/add",t).then((function(e){return console.log("response.data",e.data)})).catch((function(e){return console.log("error",e)})),this.setState({username:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create a new user"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col s6"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Please input username",value:this.state.username,onChange:this.onChangeUsername}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col s6"},r.a.createElement("input",{type:"submit",value:"Create User",className:"btn btn-primary"})))))}}]),a}(n.Component);var j=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement("br",null),r.a.createElement(c.a,{path:"/",exact:!0,component:g}),r.a.createElement(c.a,{path:"/edit/:id",component:D}),r.a.createElement(c.a,{path:"/create",component:y}),r.a.createElement(c.a,{path:"/user",component:N})))};o.a.render(r.a.createElement(j,null),document.getElementById("root"))},79:function(e,t,a){e.exports=a(161)}},[[79,1,2]]]);
//# sourceMappingURL=main.d382078f.chunk.js.map