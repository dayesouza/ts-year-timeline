(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{492:function(module,exports,__webpack_require__){__webpack_require__(493),__webpack_require__(655),__webpack_require__(656),__webpack_require__(856),__webpack_require__(857),__webpack_require__(863),__webpack_require__(864),__webpack_require__(862),__webpack_require__(858),__webpack_require__(865),__webpack_require__(859),__webpack_require__(860),__webpack_require__(866),module.exports=__webpack_require__(852)},562:function(module,exports){},656:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(359)},852:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(359).configure)([__webpack_require__(853),__webpack_require__(854)],module,!1)}).call(this,__webpack_require__(209)(module))},853:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=853},854:function(module,exports,__webpack_require__){var map={"./stories/Tabs.stories.tsx":861};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=854},861:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Tabs_stories_Primary}));var _templateObject,_templateObject2,Tabs_templateObject,Tabs_templateObject2,_templateObject3,_templateObject4,_templateObject5,objectSpread2=__webpack_require__(234),taggedTemplateLiteral=__webpack_require__(84),slicedToArray=__webpack_require__(233),react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(85),jsx_runtime=__webpack_require__(32),TabIndicator_TabIndicator=Object(react.memo)((function TabIndicator(_ref){var primaryColor=_ref.primaryColor,secondaryColor=_ref.secondaryColor,activeTabLabel=_ref.activeTabLabel,label=_ref.label,_onClick=_ref.onClick;return Object(jsx_runtime.jsx)(Item,{isActive:activeTabLabel===label,primaryColor:primaryColor,secondaryColor:secondaryColor,onClick:function onClick(){return _onClick(label)},children:Object(jsx_runtime.jsx)(Label,{className:"label",children:label})})})),Item=styled_components_browser_esm.a.li(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  display: inline-block;\n  margin-right: 15em;\n  position: relative;\n  cursor: pointer;\n  background-color: ",';\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n\n  :after {\n    left: 100%;\n  }\n\n  :before {\n    right: 100%;\n  }\n\n  &:before,\n  &:after {\n    content: "";\n    width: 15em;\n    border-bottom: 1px solid;\n    position: absolute;\n    top: 50%;\n    color: ',";\n  }\n\n  &:first-of-type:before,\n  &:last-of-type:after {\n    display: none;\n  }\n\n  &:last-of-type {\n    margin-right: unset;\n  }\n"])),(function(_ref2){var isActive=_ref2.isActive,primaryColor=_ref2.primaryColor,secondaryColor=_ref2.secondaryColor;return isActive?primaryColor:secondaryColor}),(function(_ref3){return _ref3.secondaryColor})),Label=styled_components_browser_esm.a.div(_templateObject2||(_templateObject2=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  margin-top: 30px;\n  margin-left: -8px;\n"])));try{TabIndicator_TabIndicator.displayName="TabIndicator",TabIndicator_TabIndicator.__docgenInfo={description:"",displayName:"TabIndicator",props:{primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!0,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!0,type:{name:"string"}},activeTabLabel:{defaultValue:null,description:"",name:"activeTabLabel",required:!0,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(label: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabIndicator.tsx#TabIndicator"]={docgenInfo:TabIndicator_TabIndicator.__docgenInfo,name:"TabIndicator",path:"src/components/TabIndicator.tsx#TabIndicator"})}catch(__react_docgen_typescript_loader_error){}var Tab_templateObject,Tabs_Tabs=Object(react.memo)((function Tabs(_ref){var _scrl$current10,_scrl$current11,_ref$primaryColor=_ref.primaryColor,primaryColor=void 0===_ref$primaryColor?"#267BFE":_ref$primaryColor,_ref$secondaryColor=_ref.secondaryColor,secondaryColor=void 0===_ref$secondaryColor?"#C4C4C4":_ref$secondaryColor,children=_ref.children,scrl=Object(react.useRef)(null),_useState=Object(react.useState)(0),_useState2=Object(slicedToArray.a)(_useState,2),activeTab=_useState2[0],setActiveTab=_useState2[1],_useState3=Object(react.useState)(0),_useState4=Object(slicedToArray.a)(_useState3,2),scrollX=_useState4[0],setscrollX=_useState4[1],_useState5=Object(react.useState)(!1),_useState6=Object(slicedToArray.a)(_useState5,2),scrolEnd=_useState6[0],setscrolEnd=_useState6[1],onClick=Object(react.useCallback)((function(label){setActiveTab(label)}),[setActiveTab]),tabRendered=Object(react.useMemo)((function(){return react_default.a.Children.map(children,(function(child,index){return activeTab||0!==index?child.props.year===activeTab?react_default.a.cloneElement(child):void 0:(setActiveTab(child.props.year),react_default.a.cloneElement(child))}))}),[children,activeTab,setActiveTab]),slide=function slide(shift){var _scrl$current,_scrl$current2,_scrl$current3;scrl.current&&(scrl.current.scrollLeft+=shift),setscrollX(scrollX+shift),Math.floor((null==scrl||null===(_scrl$current=scrl.current)||void 0===_scrl$current?void 0:_scrl$current.scrollWidth)-(null==scrl||null===(_scrl$current2=scrl.current)||void 0===_scrl$current2?void 0:_scrl$current2.scrollLeft))<=(null==scrl||null===(_scrl$current3=scrl.current)||void 0===_scrl$current3?void 0:_scrl$current3.offsetWidth)?setscrolEnd(!0):setscrolEnd(!1)};return Object(react.useEffect)((function(){var _scrl$current8,_scrl$current9;return scrl.current&&(null==scrl||null===(_scrl$current8=scrl.current)||void 0===_scrl$current8?void 0:_scrl$current8.scrollWidth)===(null==scrl||null===(_scrl$current9=scrl.current)||void 0===_scrl$current9?void 0:_scrl$current9.offsetWidth)?setscrolEnd(!0):setscrolEnd(!1),function(){}}),[null==scrl||null===(_scrl$current10=scrl.current)||void 0===_scrl$current10?void 0:_scrl$current10.scrollWidth,null==scrl||null===(_scrl$current11=scrl.current)||void 0===_scrl$current11?void 0:_scrl$current11.offsetWidth]),Object(jsx_runtime.jsxs)(Container,{children:[Object(jsx_runtime.jsxs)(TabsContainer,{children:[Object(jsx_runtime.jsx)(Button,{color:primaryColor,disabled:0==scrollX,onClick:function onClick(){return slide(-300)},children:Object(jsx_runtime.jsx)(Icon,{className:"bi bi-chevron-left"})}),Object(jsx_runtime.jsx)(TabList,{ref:scrl,onScroll:function scrollCheck(){var _scrl$current4,_scrl$current5,_scrl$current6,_scrl$current7;setscrollX(null==scrl||null===(_scrl$current4=scrl.current)||void 0===_scrl$current4?void 0:_scrl$current4.scrollLeft),Math.floor((null==scrl||null===(_scrl$current5=scrl.current)||void 0===_scrl$current5?void 0:_scrl$current5.scrollWidth)-(null==scrl||null===(_scrl$current6=scrl.current)||void 0===_scrl$current6?void 0:_scrl$current6.scrollLeft))<=(null==scrl||null===(_scrl$current7=scrl.current)||void 0===_scrl$current7?void 0:_scrl$current7.offsetWidth)?setscrolEnd(!0):setscrolEnd(!1)},children:react_default.a.Children.map(children,(function(child){var year=child.props.year;return Object(jsx_runtime.jsx)(TabIndicator_TabIndicator,{primaryColor:primaryColor,secondaryColor:secondaryColor,activeTabLabel:activeTab,label:year,onClick:onClick},year)}))}),Object(jsx_runtime.jsx)(Button,{color:primaryColor,disabled:scrolEnd,onClick:function onClick(){return slide(300)},children:Object(jsx_runtime.jsx)(Icon,{className:"bi bi-chevron-right"})})]}),Object(jsx_runtime.jsx)(Container,{children:tabRendered})]})})),TabsContainer=styled_components_browser_esm.a.div(Tabs_templateObject||(Tabs_templateObject=Object(taggedTemplateLiteral.a)(["\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),Button=styled_components_browser_esm.a.button(Tabs_templateObject2||(Tabs_templateObject2=Object(taggedTemplateLiteral.a)(["\n  &:enabled {\n    color: ",";\n  }\n  cursor: pointer;\n  background-color: unset;\n  border: unset;\n  font-size: 22px;\n"])),(function(_ref2){return _ref2.color})),Icon=styled_components_browser_esm.a.i(_templateObject3||(_templateObject3=Object(taggedTemplateLiteral.a)([""]))),Container=styled_components_browser_esm.a.div(_templateObject4||(_templateObject4=Object(taggedTemplateLiteral.a)([""]))),TabList=styled_components_browser_esm.a.ol(_templateObject5||(_templateObject5=Object(taggedTemplateLiteral.a)(["\n  text-align: center;\n  display: flex;\n  align-items: center;\n  list-style: none;\n  max-width: 100%;\n  overflow-x: scroll;\n  scroll-behavior: smooth;\n  padding-bottom: 35px;\n  padding-top: 35px;\n\n  &::-webkit-scrollbar {\n    background: transparent;\n    -webkit-appearance: none;\n    width: 0;\n    height: 0;\n  }\n"])));try{Tabs_Tabs.displayName="Tabs",Tabs_Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs.tsx#Tabs"]={docgenInfo:Tabs_Tabs.__docgenInfo,name:"Tabs",path:"src/components/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}var Tab=styled_components_browser_esm.a.div(Tab_templateObject||(Tab_templateObject=Object(taggedTemplateLiteral.a)(["\n  text-align: -webkit-center;\n"])));try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},year:{defaultValue:null,description:"",name:"year",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tab.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"src/components/Tab.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Tabs",component:Tabs_Tabs,argTypes:{primaryColor:{control:"color"},secondaryColor:{control:"color"}}};var Tabs_stories_Primary=function Primary(args){return Object(jsx_runtime.jsxs)(Tabs_Tabs,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{children:[Object(jsx_runtime.jsxs)(Tab,{year:1987,children:["See ya later, ",Object(jsx_runtime.jsx)("em",{children:"Alligator"})]}),Object(jsx_runtime.jsxs)(Tab,{year:1995,children:["See ya later, ",Object(jsx_runtime.jsx)("em",{children:"Cat"})]}),Object(jsx_runtime.jsxs)(Tab,{year:2021,children:["After 'while, ",Object(jsx_runtime.jsx)("em",{children:"Crocodile"})]}),Object(jsx_runtime.jsxs)(Tab,{year:2e3,children:["Nothing to see here, this tab is ",Object(jsx_runtime.jsx)("em",{children:"extinct"}),"!"]}),Object(jsx_runtime.jsxs)(Tab,{year:2001,children:["Nothing to see here, this tab is ",Object(jsx_runtime.jsx)("em",{children:"extinct"}),"!"]}),Object(jsx_runtime.jsxs)(Tab,{year:2002,children:["Nothing to see here, this tab is ",Object(jsx_runtime.jsx)("em",{children:"extinct"}),"!"]}),Object(jsx_runtime.jsxs)(Tab,{year:2003,children:["Nothing to see here, this tab is ",Object(jsx_runtime.jsx)("em",{children:"extinct"}),"!"]})]}))};Tabs_stories_Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args: any) => (\n  <Tabs {...args}>\n    <Tab year={1987}>\n      See ya later, <em>Alligator</em>\n    </Tab>\n    <Tab year={1995}>\n      See ya later, <em>Cat</em>\n    </Tab>\n    <Tab year={2021}>\n      After 'while, <em>Crocodile</em>\n    </Tab>\n    <Tab year={2000}>\n      Nothing to see here, this tab is <em>extinct</em>!\n    </Tab>\n    <Tab year={2001}>\n      Nothing to see here, this tab is <em>extinct</em>!\n    </Tab>\n    <Tab year={2002}>\n      Nothing to see here, this tab is <em>extinct</em>!\n    </Tab>\n    <Tab year={2003}>\n      Nothing to see here, this tab is <em>extinct</em>!\n    </Tab>\n  </Tabs>\n)"}},Tabs_stories_Primary.parameters);try{Tabs_stories_Primary.displayName="Primary",Tabs_stories_Primary.__docgenInfo={description:"",displayName:"Primary",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Tabs.stories.tsx#Primary"]={docgenInfo:Tabs_stories_Primary.__docgenInfo,name:"Primary",path:"src/stories/Tabs.stories.tsx#Primary"})}catch(__react_docgen_typescript_loader_error){}},866:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(873),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[492,2,3]]]);