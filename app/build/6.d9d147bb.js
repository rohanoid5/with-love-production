webpackJsonp([6],{651:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){return{letterOne:e.letterOne}}function c(e){return(0,m.bindActionCreators)({getMinimalLetterOne:h.getMinimalLetterOne},e)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(0),d=l(u),f=a(35),m=a(46),p=a(89),h=a(356),v=a(64),y=l(v),E=a(87),g=(l(E),a(63)),b=l(g),N=a(154),_=(l(N),a(54)),k=l(_),w=a(355),O=l(w),x=a(100),P=(l(x),a(287)),C=(l(P),a(99)),T=(l(C),a(152)),j=(l(T),a(153)),L=(l(j),a(143)),M=(l(L),a(101)),S=(l(M),a(102)),I=(l(S),a(88),a(142),a(358)),q=(l(I),a(661)),R=l(q),W=a(664),B={title:{cursor:"pointer"}},G=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={shadowRight:1,shadowLeft:1,expanded:!1,title:"Home"},a.onCloseClick=a.onCloseClick.bind(a),a.questionItemFill=a.questionItemFill.bind(a),a.dispatchLetters=a.dispatchLetters.bind(a),a}return i(t,e),s(t,[{key:"componentDidMount",value:function(){this.props.getMinimalLetterOne(this.props.params.id)}},{key:"componentWillMount",value:function(){}},{key:"onCloseClick",value:function(){f.hashHistory.goBack()}},{key:"questionItemFill",value:function(e,t){return d.default.createElement(R.default,{key:e._id,question:e})}},{key:"dispatchLetters",value:function(){}},{key:"render",value:function(){return d.default.createElement("div",null,this.props.letterOne.completed?d.default.createElement("div",null,d.default.createElement(b.default,{title:d.default.createElement("span",{style:B.title},this.props.letterOne.data.letter.title),iconElementLeft:d.default.createElement(k.default,{onClick:this.onCloseClick},d.default.createElement(O.default,null))}),d.default.createElement("div",{className:"content"},d.default.createElement("div",{className:"container-fluid"},d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},d.default.createElement("div",{className:"card card-stats"},d.default.createElement("div",{className:"card-header","data-background-color":"orange"},d.default.createElement("i",{className:"material-icons"},"email")),d.default.createElement("div",{className:"card-content"},d.default.createElement("p",{className:"category"},"Letter Type"),d.default.createElement("h3",{className:"title"},this.props.letterOne.data.letter.type)),d.default.createElement("div",{className:"card-footer"},d.default.createElement("div",{className:"stats"},d.default.createElement("a",null,"Get More Space..."))))),d.default.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},d.default.createElement("div",{className:"card card-stats"},d.default.createElement("div",{className:"card-header","data-background-color":"green"},d.default.createElement("i",{className:"material-icons"},"monetization_on")),d.default.createElement("div",{className:"card-content"},d.default.createElement("p",{className:"category"},"Payment"),d.default.createElement("h3",{className:"title"},"$2")),d.default.createElement("div",{className:"card-footer"},d.default.createElement("div",{className:"stats"},this.props.letterOne.data.letter.payment)))),d.default.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},d.default.createElement("div",{className:"card card-stats"},d.default.createElement("div",{className:"card-header","data-background-color":"red"},d.default.createElement("i",{className:"material-icons"},"attach_file")),d.default.createElement("div",{className:"card-content"},d.default.createElement("p",{className:"category"},"Link"),d.default.createElement("h3",{className:"title"},"Pending")),d.default.createElement("div",{className:"card-footer"},d.default.createElement("div",{className:"stats"},"Will be available shortly")))),d.default.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},d.default.createElement("div",{className:"card card-stats"},d.default.createElement("div",{className:"card-header","data-background-color":"blue"},d.default.createElement("img",{src:"avatar.jpg",alt:"Thumbnail Image",style:{width:60},className:"img-circle img-raised img-responsive"})),d.default.createElement("div",{className:"card-content"},d.default.createElement("p",{className:"category"},"Receiver"),d.default.createElement("h3",{className:"title"},"Jane Doe")),d.default.createElement("div",{className:"card-footer"},d.default.createElement("div",{className:"stats"},"Just Updated"))))),d.default.createElement("div",{className:"content"},d.default.createElement("div",{className:"container-fluid"},d.default.createElement("div",{className:"row"},d.default.createElement("div",{style:{fontSize:"30px",fontWeight:400,letterSpacing:"5px",textAlign:"center",marginBottom:12}},d.default.createElement("span",null,"THE QUESTIONS USER ANSWERED")),d.default.createElement(W.GridList,null,this.props.letterOne.data.letter.questions.map(this.questionItemFill)),d.default.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:8}},d.default.createElement(y.default,{label:"dispatch",primary:!0,onClick:this.dispatchLetters})))))))):d.default.createElement("div",null,"A"))}}]),t}(d.default.Component);t.default=(0,p.connect)(o,c)(G)},661:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),c=a(0),s=l(c),u=(a(35),a(46),a(89),a(356),a(64)),d=(l(u),a(87)),f=(l(d),a(63)),m=(l(f),a(154)),p=(l(m),a(54)),h=(l(p),a(355)),v=(l(h),a(100)),y=(l(v),a(287)),E=(l(y),a(99)),g=(l(E),a(152)),b=(l(g),a(153)),N=(l(b),a(143)),_=(l(N),a(101)),k=(l(_),a(102)),w=(l(k),a(88),a(142),function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={shadowRight:1,shadowLeft:1,expanded:!1,title:"Home"},a}return i(t,e),o(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return s.default.createElement("div",{className:"card"},s.default.createElement("div",{className:"card-header","data-background-color":"purple"},s.default.createElement("h3",{className:"title"},this.props.question.question)),s.default.createElement("div",{className:"card-content"},s.default.createElement("h4",{className:"category text-primary"},this.props.question.answer)))}}]),t}(s.default.Component));t.default=w},662:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return{root:{display:"flex",flexWrap:"wrap",margin:-e.padding/2},item:{boxSizing:"border-box",padding:e.padding/2}}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(12),i=l(r),o=a(11),c=l(o),s=a(7),u=l(s),d=a(4),f=l(d),m=a(5),p=l(m),h=a(9),v=l(h),y=a(8),E=l(y),g=a(6),b=l(g),N=a(0),_=l(N),k=function(e){function t(){return(0,f.default)(this,t),(0,v.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this.props,t=e.cols,a=e.padding,l=e.cellHeight,r=e.children,o=e.style,s=(0,c.default)(e,["cols","padding","cellHeight","children","style"]),u=this.context.muiTheme.prepareStyles,d=n(this.props,this.context),f=(0,b.default)(d.root,o),m=_.default.Children.map(r,function(e){if(_.default.isValidElement(e)&&"Subheader"===e.type.muiName)return e;var n=e.props.cols||1,r=e.props.rows||1,i=(0,b.default)({},d.item,{width:100/t*n+"%",height:"auto"===l?"auto":l*r+a});return _.default.createElement("div",{style:u(i)},e)});return _.default.createElement("div",(0,i.default)({style:u(f)},s),m)}}]),t}(N.Component);k.defaultProps={cols:2,padding:4,cellHeight:180},k.contextTypes={muiTheme:N.PropTypes.object.isRequired},t.default=k},663:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var a,l=t.muiTheme,n=l.baseTheme,r=l.gridTile,i=e.actionIcon&&e.actionPosition;return{root:{position:"relative",display:"block",height:"100%",overflow:"hidden"},titleBar:(a={position:"absolute",left:0,right:0},(0,b.default)(a,e.titlePosition,0),(0,b.default)(a,"height",e.subtitle?68:48),(0,b.default)(a,"background",e.titleBackground),(0,b.default)(a,"display","flex"),(0,b.default)(a,"alignItems","center"),a),titleWrap:{flexGrow:1,marginLeft:"left"!==i?n.spacing.desktopGutterLess:0,marginRight:"left"===i?n.spacing.desktopGutterLess:0,color:r.textColor,overflow:"hidden"},title:{fontSize:"16px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},subtitle:{fontSize:"12px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},actionIcon:{order:"left"===i?-1:1},childImg:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"}}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(12),i=l(r),o=a(11),c=l(o),s=a(7),u=l(s),d=a(4),f=l(d),m=a(5),p=l(m),h=a(9),v=l(h),y=a(8),E=l(y),g=a(360),b=l(g),N=a(6),_=l(N),k=a(0),w=l(k),O=function(e){function t(){return(0,f.default)(this,t),(0,v.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){this.ensureImageCover()}},{key:"componentDidUpdate",value:function(){this.ensureImageCover()}},{key:"ensureImageCover",value:function(){var e=this,t=this.refs.img;t&&function(){var a=function a(){if(t.offsetWidth<t.parentNode.offsetWidth){var l=e.context.muiTheme.isRtl;t.style.height="auto",l?t.style.right="0":t.style.left="0",t.style.width="100%",t.style.top="50%",t.style.transform=t.style.WebkitTransform="translateY(-50%)"}t.removeEventListener("load",a),t=null};t.complete?a():t.addEventListener("load",a)}()}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.subtitle,l=(e.titlePosition,e.titleBackground,e.titleStyle),r=e.actionIcon,o=(e.actionPosition,e.style),s=e.children,u=e.containerElement,d=(0,c.default)(e,["title","subtitle","titlePosition","titleBackground","titleStyle","actionIcon","actionPosition","style","children","containerElement"]),f=this.context.muiTheme.prepareStyles,m=n(this.props,this.context),p=(0,_.default)(m.root,o),h=null;t&&(h=w.default.createElement("div",{key:"titlebar",style:f(m.titleBar)},w.default.createElement("div",{style:f(m.titleWrap)},w.default.createElement("div",{style:f((0,_.default)(m.title,l))},t),a?w.default.createElement("div",{style:f(m.subtitle)},a):null),r?w.default.createElement("div",{style:f(m.actionIcon)},r):null));var v=s;1===w.default.Children.count(s)&&(v=w.default.Children.map(s,function(e){return"img"===e.type?w.default.cloneElement(e,{key:"img",ref:"img",style:f((0,_.default)({},m.childImg,e.props.style))}):e}));var y=(0,i.default)({style:f(p)},d);return w.default.isValidElement(u)?w.default.cloneElement(u,y,[v,h]):w.default.createElement(u,y,[v,h])}}]),t}(k.Component);O.defaultProps={titlePosition:"bottom",titleBackground:"rgba(0, 0, 0, 0.4)",actionPosition:"right",cols:1,rows:1,containerElement:"div"},O.contextTypes={muiTheme:k.PropTypes.object.isRequired},t.default=O},664:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GridTile=t.GridList=void 0;var n=a(662),r=l(n),i=a(663),o=l(i);t.GridList=r.default,t.GridTile=o.default,t.default=r.default}});