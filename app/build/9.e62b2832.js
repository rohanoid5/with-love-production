webpackJsonp([9],{659:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{authState:e.authState}}function s(e){return(0,L.bindActionCreators)({signupUser:N.signupUser},e)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),c=a(0),f=l(c),m=a(35),d=a(156),p=l(d),h=a(64),g=l(h),y=a(142),E=a(63),b=(l(E),a(160),a(361)),v=(l(b),a(143)),w=(l(v),a(362)),C=(l(w),a(55)),k=a(292),x=l(k),N=a(289),T=a(89),L=a(46),_={margin:12},P={display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:350,margin:"auto",padding:24},j={textAlign:"center"},U={display:"flex",alignItems:"center",justifyContent:"center",margin:24},O=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={value:1,email:"",password:"",name:"",role:"EMP",username:""},a.onLoginClick=a.onLoginClick.bind(a),a.onSignupClick=a.onSignupClick.bind(a),a}return i(t,e),o(t,[{key:"componentWillMount",value:function(){this.props.setProperties("Signup",!1,1,"")}},{key:"onLoginClick",value:function(){m.hashHistory.push("/login")}},{key:"onSignupClick",value:function(){1==this.state.value?this.props.signupUser(this.state,"EMP"):2==this.state.value&&this.props.signupUser(this.state,"MNG")}},{key:"captureMail",value:function(e){this.state.email=e.target.value}},{key:"capturePassword",value:function(e){this.state.password=e.target.value}},{key:"captureName",value:function(e){this.state.name=e.target.value}},{key:"captureUsername",value:function(e){this.state.username=e.target.value}},{key:"render",value:function(){return f.default.createElement("div",{style:{margin:"auto",verticalAlign:"middle"}},f.default.createElement(y.Card,{style:P},f.default.createElement("div",{style:{display:"flex",flexDirection:"row",marginLeft:84,marginTop:"20px"}},f.default.createElement("h4",{style:{color:"#FF6B6C",marginTop:4}},"With Love "),f.default.createElement(x.default,{style:{marginLeft:6},color:C.red500})),f.default.createElement("div",{style:{textAlign:"center",marginTop:"4px"}},"An easy way to express your Love."),f.default.createElement("form",{style:j},f.default.createElement("div",{className:"group"},f.default.createElement(p.default,{autoFocus:!0,ref:"name",hintText:"Name",floatingLabelText:"Name",type:"Name",onChange:this.captureName.bind(this)})),f.default.createElement("div",{className:"group"},f.default.createElement(p.default,{autoFocus:!0,ref:"email",hintText:"Email",floatingLabelText:"Email",type:"Email",onChange:this.captureMail.bind(this)})),f.default.createElement("div",{className:"group"},f.default.createElement(p.default,{autoFocus:!0,ref:"username",hintText:"Username",floatingLabelText:"Username",type:"Username",onChange:this.captureUsername.bind(this)})),f.default.createElement("div",{className:"group"},f.default.createElement(p.default,{hintText:"Password ",ref:"password",floatingLabelText:"Password",type:"password",onChange:this.capturePassword.bind(this)}))),f.default.createElement("div",{style:U},f.default.createElement(g.default,{primary:!0,onClick:this.onLoginClick,label:"Login",style:_}),f.default.createElement(g.default,{primary:!0,onClick:this.onSignupClick,label:"Signup",style:_}))),f.default.createElement("div",{className:"sidebar","data-color":"purple","data-image":"../assets/img/sidebar-1.jpg"},f.default.createElement("div",{className:"logo"},f.default.createElement("a",{href:"http://www.creative-tim.com",class:"simple-text"},"Creative Tim")),f.default.createElement("div",{className:"sidebar-wrapper"},f.default.createElement("ul",{className:"nav"},f.default.createElement("li",{className:"active"},f.default.createElement("a",{href:"dashboard.html"},f.default.createElement("i",{className:"material-icons"},"dashboard"),f.default.createElement("p",null,"Dashboard"))),f.default.createElement("li",null,f.default.createElement("a",{href:"./user.html"},f.default.createElement("i",{className:"material-icons"},"person"),f.default.createElement("p",null,"User Profile"))),f.default.createElement("li",null,f.default.createElement("a",{href:"./table.html"},f.default.createElement("i",{className:"material-icons"},"content_paste"),f.default.createElement("p",null,"Table List"))),f.default.createElement("li",null,f.default.createElement("a",{href:"./typography.html"},f.default.createElement("i",{className:"material-icons"},"library_books"),f.default.createElement("p",null,"Typography")))))))}}]),t}(f.default.Component);t.default=(0,T.connect)(u,s)(O)}});