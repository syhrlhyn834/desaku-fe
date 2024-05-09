import{s as H}from"./index.esm.92e3b09a.js";import{s as D}from"./index.esm.620011f4.js";import{B as W,O as z,D as p,R as q,r as k,a as G,o as c,b as y,i as v,s as j,m as u,F as C,c as h,k as m,j as g,w as J,e as w,A as Q,q as X,t as Y,f as F,h as M,z as Z,l as _}from"./entry.2ba41e71.js";import{s as L}from"./basecomponent.esm.d752fcf6.js";import $ from"./checkbox.esm.58d3a04e.js";import{s as ee}from"./index.esm.312e531e.js";import{s as te}from"./index.esm.4adc143d.js";import{s as ne}from"./index.esm.6cb04005.js";import{s as re}from"./index.esm.4cab6348.js";import"./baseicon.esm.26b87126.js";var ie={root:function(t){var n=t.props;return["p-tree p-component",{"p-tree-selectable":n.selectionMode!=null,"p-tree-loading":n.loading,"p-tree-flex-scrollable":n.scrollHeight==="flex"}]},loadingOverlay:"p-tree-loading-overlay p-component-overlay",loadingIcon:"p-tree-loading-icon",filterContainer:"p-tree-filter-container",input:"p-tree-filter p-inputtext p-component",searchIcon:"p-tree-filter-icon",wrapper:"p-tree-wrapper",container:"p-tree-container",node:function(t){var n=t.instance;return["p-treenode",{"p-treenode-leaf":n.leaf}]},content:function(t){var n=t.instance;return["p-treenode-content",n.node.styleClass,{"p-treenode-selectable":n.selectable,"p-highlight":n.checkboxMode&&n.$parentInstance.highlightOnSelect?n.checked:n.selected}]},toggler:"p-tree-toggler p-link",togglerIcon:"p-tree-toggler-icon",nodeTogglerIcon:"p-tree-node-toggler-icon",nodeCheckbox:function(t){var n=t.instance;return[{"p-indeterminate":n.partialChecked}]},nodeIcon:"p-treenode-icon",label:"p-treenode-label",subgroup:"p-treenode-children"},le=W.extend({name:"tree",classes:ie}),oe={name:"BaseTree",extends:L,props:{value:{type:null,default:null},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},metaKeySelection:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},loadingMode:{type:String,default:"mask"},filter:{type:Boolean,default:!1},filterBy:{type:String,default:"label"},filterMode:{type:String,default:"lenient"},filterPlaceholder:{type:String,default:null},filterLocale:{type:String,default:void 0},highlightOnSelect:{type:Boolean,default:!1},scrollHeight:{type:String,default:null},level:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:le,provide:function(){return{$parentInstance:this}}};function x(e){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(e)}function O(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=V(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(s){throw s},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,o=!1,d;return{s:function(){n=n.call(e)},n:function(){var s=n.next();return i=s.done,s},e:function(s){o=!0,d=s},f:function(){try{!i&&n.return!=null&&n.return()}finally{if(o)throw d}}}}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ae(e,t,n){return t=se(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e){var t=ce(e,"string");return x(t)=="symbol"?t:String(t)}function ce(e,t){if(x(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(x(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function S(e){return fe(e)||ue(e)||V(e)||de()}function de(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(e,t){if(e){if(typeof e=="string")return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}}function ue(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fe(e){if(Array.isArray(e))return I(e)}function I(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R={name:"TreeNode",hostName:"Tree",extends:L,emits:["node-toggle","node-click","checkbox-change"],props:{node:{type:null,default:null},expandedKeys:{type:null,default:null},loadingMode:{type:String,default:"mask"},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},templates:{type:null,default:null},level:{type:Number,default:null},index:null},nodeTouched:!1,toggleClicked:!1,mounted:function(){this.setAllNodesTabIndexes()},methods:{toggle:function(){this.$emit("node-toggle",this.node),this.toggleClicked=!0},label:function(t){return typeof t.label=="function"?t.label():t.label},onChildNodeToggle:function(t){this.$emit("node-toggle",t)},getPTOptions:function(t){return this.ptm(t,{context:{index:this.index,expanded:this.expanded,selected:this.selected,checked:this.checked,leaf:this.leaf}})},onClick:function(t){if(this.toggleClicked||p.getAttribute(t.target,'[data-pc-section="toggler"]')||p.getAttribute(t.target.parentElement,'[data-pc-section="toggler"]')){this.toggleClicked=!1;return}this.isCheckboxSelectionMode()?this.toggleCheckbox():this.$emit("node-click",{originalEvent:t,nodeTouched:this.nodeTouched,node:this.node}),this.nodeTouched=!1},onChildNodeClick:function(t){this.$emit("node-click",t)},onTouchEnd:function(){this.nodeTouched=!0},onKeyDown:function(t){if(this.isSameNode(t))switch(t.code){case"Tab":this.onTabKey(t);break;case"ArrowDown":this.onArrowDown(t);break;case"ArrowUp":this.onArrowUp(t);break;case"ArrowRight":this.onArrowRight(t);break;case"ArrowLeft":this.onArrowLeft(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowDown:function(t){var n=t.target.getAttribute("data-pc-section")==="toggler"?t.target.closest('[role="treeitem"]'):t.target,r=n.children[1];if(r)this.focusRowChange(n,r.children[0]);else if(n.nextElementSibling)this.focusRowChange(n,n.nextElementSibling);else{var l=this.findNextSiblingOfAncestor(n);l&&this.focusRowChange(n,l)}t.preventDefault()},onArrowUp:function(t){var n=t.target;if(n.previousElementSibling)this.focusRowChange(n,n.previousElementSibling,this.findLastVisibleDescendant(n.previousElementSibling));else{var r=this.getParentNodeElement(n);r&&this.focusRowChange(n,r)}t.preventDefault()},onArrowRight:function(t){var n=this;this.leaf||this.expanded||(t.currentTarget.tabIndex=-1,this.$emit("node-toggle",this.node),this.$nextTick(function(){n.onArrowDown(t)}))},onArrowLeft:function(t){var n=p.findSingle(t.currentTarget,'[data-pc-section="toggler"]');if(this.level===0&&!this.expanded)return!1;if(this.expanded&&!this.leaf)return n.click(),!1;var r=this.findBeforeClickableNode(t.currentTarget);r&&this.focusRowChange(t.currentTarget,r)},onEnterKey:function(t){this.setTabIndexForSelectionMode(t,this.nodeTouched),this.onClick(t),t.preventDefault()},onTabKey:function(){this.setAllNodesTabIndexes()},setAllNodesTabIndexes:function(){var t=p.find(this.$refs.currentNode.closest('[data-pc-section="container"]'),'[role="treeitem"]'),n=S(t).some(function(l){return l.getAttribute("aria-selected")==="true"||l.getAttribute("aria-checked")==="true"});if(S(t).forEach(function(l){l.tabIndex=-1}),n){var r=S(t).filter(function(l){return l.getAttribute("aria-selected")==="true"||l.getAttribute("aria-checked")==="true"});r[0].tabIndex=0;return}S(t)[0].tabIndex=0},setTabIndexForSelectionMode:function(t,n){if(this.selectionMode!==null){var r=S(p.find(this.$refs.currentNode.parentElement,'[role="treeitem"]'));t.currentTarget.tabIndex=n===!1?-1:0,r.every(function(l){return l.tabIndex===-1})&&(r[0].tabIndex=0)}},focusRowChange:function(t,n,r){t.tabIndex="-1",n.tabIndex="0",this.focusNode(r||n)},findBeforeClickableNode:function(t){var n=t.closest("ul").closest("li");if(n){var r=p.findSingle(n,"button");return r&&r.style.visibility!=="hidden"?n:this.findBeforeClickableNode(t.previousElementSibling)}return null},toggleCheckbox:function(){var t=this.selectionKeys?E({},this.selectionKeys):{},n=!this.checked;this.propagateDown(this.node,n,t),this.$emit("checkbox-change",{node:this.node,check:n,selectionKeys:t})},propagateDown:function(t,n,r){if(n?r[t.key]={checked:!0,partialChecked:!1}:delete r[t.key],t.children&&t.children.length){var l=O(t.children),i;try{for(l.s();!(i=l.n()).done;){var o=i.value;this.propagateDown(o,n,r)}}catch(d){l.e(d)}finally{l.f()}}},propagateUp:function(t){var n=t.check,r=E({},t.selectionKeys),l=0,i=!1,o=O(this.node.children),d;try{for(o.s();!(d=o.n()).done;){var a=d.value;r[a.key]&&r[a.key].checked?l++:r[a.key]&&r[a.key].partialChecked&&(i=!0)}}catch(s){o.e(s)}finally{o.f()}n&&l===this.node.children.length?r[this.node.key]={checked:!0,partialChecked:!1}:(n||delete r[this.node.key],i||l>0&&l!==this.node.children.length?r[this.node.key]={checked:!1,partialChecked:!0}:delete r[this.node.key]),this.$emit("checkbox-change",{node:t.node,check:t.check,selectionKeys:r})},onChildCheckboxChange:function(t){this.$emit("checkbox-change",t)},findNextSiblingOfAncestor:function(t){var n=this.getParentNodeElement(t);return n?n.nextElementSibling?n.nextElementSibling:this.findNextSiblingOfAncestor(n):null},findLastVisibleDescendant:function(t){var n=t.children[1];if(n){var r=n.children[n.children.length-1];return this.findLastVisibleDescendant(r)}else return t},getParentNodeElement:function(t){var n=t.parentElement.parentElement;return p.getAttribute(n,"role")==="treeitem"?n:null},focusNode:function(t){t.focus()},isCheckboxSelectionMode:function(){return this.selectionMode==="checkbox"},isSameNode:function(t){return t.currentTarget&&(t.currentTarget.isSameNode(t.target)||t.currentTarget.isSameNode(t.target.closest('[role="treeitem"]')))}},computed:{hasChildren:function(){return this.node.children&&this.node.children.length>0},expanded:function(){return this.expandedKeys&&this.expandedKeys[this.node.key]===!0},leaf:function(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},selectable:function(){return this.node.selectable===!1?!1:this.selectionMode!=null},selected:function(){return this.selectionMode&&this.selectionKeys?this.selectionKeys[this.node.key]===!0:!1},checkboxMode:function(){return this.selectionMode==="checkbox"&&this.node.selectable!==!1},checked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].checked:!1},partialChecked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].partialChecked:!1},ariaChecked:function(){return this.selectionMode==="single"||this.selectionMode==="multiple"?this.selected:void 0},ariaSelected:function(){return this.checkboxMode?this.checked:void 0}},components:{Checkbox:$,ChevronDownIcon:te,ChevronRightIcon:ne,CheckIcon:ee,MinusIcon:re,SpinnerIcon:D},directives:{ripple:q}},he=["aria-label","aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-level","aria-checked","tabindex"],ye=["data-p-highlight","data-p-selectable"];function pe(e,t,n,r,l,i){var o=k("SpinnerIcon"),d=k("Checkbox"),a=k("TreeNode",!0),s=G("ripple");return c(),y("li",u({ref:"currentNode",class:e.cx("node"),role:"treeitem","aria-label":i.label(n.node),"aria-selected":i.ariaSelected,"aria-expanded":i.expanded,"aria-setsize":n.node.children?n.node.children.length:0,"aria-posinset":n.index+1,"aria-level":n.level,"aria-checked":i.ariaChecked,tabindex:n.index===0?0:-1,onKeydown:t[4]||(t[4]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},n.level===1?i.getPTOptions("node"):e.ptm("subgroup")),[v("div",u({class:e.cx("content"),onClick:t[2]||(t[2]=function(){return i.onClick&&i.onClick.apply(i,arguments)}),onTouchend:t[3]||(t[3]=function(){return i.onTouchEnd&&i.onTouchEnd.apply(i,arguments)}),style:n.node.style},i.getPTOptions("content"),{"data-p-highlight":i.checkboxMode?i.checked:i.selected,"data-p-selectable":i.selectable}),[j((c(),y("button",u({type:"button",class:e.cx("toggler"),onClick:t[0]||(t[0]=function(){return i.toggle&&i.toggle.apply(i,arguments)}),tabindex:"-1","aria-hidden":"true"},i.getPTOptions("toggler")),[n.node.loading&&n.loadingMode==="icon"?(c(),y(C,{key:0},[n.templates.nodetogglericon?(c(),h(g(n.templates.nodetogglericon),{key:0,class:m(e.cx("nodetogglericon"))},null,8,["class"])):(c(),h(o,u({key:1,spin:"",class:e.cx("nodetogglericon")},e.ptm("nodetogglericon")),null,16,["class"]))],64)):(c(),y(C,{key:1},[n.templates.togglericon?(c(),h(g(n.templates.togglericon),{key:0,node:n.node,expanded:i.expanded,class:m(e.cx("togglerIcon"))},null,8,["node","expanded","class"])):i.expanded?(c(),h(g(n.node.expandedIcon?"span":"ChevronDownIcon"),u({key:1,class:e.cx("togglerIcon")},i.getPTOptions("togglerIcon")),null,16,["class"])):(c(),h(g(n.node.collapsedIcon?"span":"ChevronRightIcon"),u({key:2,class:e.cx("togglerIcon")},i.getPTOptions("togglerIcon")),null,16,["class"]))],64))],16)),[[s]]),i.checkboxMode?(c(),h(d,{key:0,modelValue:i.checked,binary:!0,class:m(e.cx("nodeCheckbox")),tabindex:-1,unstyled:e.unstyled,pt:i.getPTOptions("nodeCheckbox"),"data-p-checked":i.checked,"data-p-partialchecked":i.partialChecked},{icon:J(function(f){return[n.templates.checkboxicon?(c(),h(g(n.templates.checkboxicon),{key:0,checked:f.checked,partialChecked:i.partialChecked,class:m(f.class)},null,8,["checked","partialChecked","class"])):(c(),h(g(i.checked?"CheckIcon":i.partialChecked?"MinusIcon":null),u({key:1,class:f.class},i.getPTOptions("nodeCheckbox.icon")),null,16,["class"]))]}),_:1},8,["modelValue","class","unstyled","pt","data-p-checked","data-p-partialchecked"])):w("",!0),v("span",u({class:[e.cx("nodeIcon"),n.node.icon]},i.getPTOptions("nodeIcon")),null,16),v("span",u({class:e.cx("label")},i.getPTOptions("label"),{onKeydown:t[1]||(t[1]=Q(function(){},["stop"]))}),[n.templates[n.node.type]||n.templates.default?(c(),h(g(n.templates[n.node.type]||n.templates.default),{key:0,node:n.node},null,8,["node"])):(c(),y(C,{key:1},[X(Y(i.label(n.node)),1)],64))],16)],16,ye),i.hasChildren&&i.expanded?(c(),y("ul",u({key:0,class:e.cx("subgroup"),role:"group"},e.ptm("subgroup")),[(c(!0),y(C,null,F(n.node.children,function(f){return c(),h(a,{key:f.key,node:f,templates:n.templates,level:n.level+1,expandedKeys:n.expandedKeys,onNodeToggle:i.onChildNodeToggle,onNodeClick:i.onChildNodeClick,selectionMode:n.selectionMode,selectionKeys:n.selectionKeys,onCheckboxChange:i.propagateUp,unstyled:e.unstyled,pt:e.pt},null,8,["node","templates","level","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange","unstyled","pt"])}),128))],16)):w("",!0)],16,he)}R.render=pe;function K(e){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(e)}function T(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=B(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(s){throw s},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,o=!1,d;return{s:function(){n=n.call(e)},n:function(){var s=n.next();return i=s.done,s},e:function(s){o=!0,d=s},f:function(){try{!i&&n.return!=null&&n.return()}finally{if(o)throw d}}}}function ge(e){return ke(e)||me(e)||B(e)||be()}function be(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(e,t){if(e){if(typeof e=="string")return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}}function me(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ke(e){if(Array.isArray(e))return N(e)}function N(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P(Object(n),!0).forEach(function(r){ve(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ve(e,t,n){return t=Se(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Se(e){var t=Ce(e,"string");return K(t)=="symbol"?t:String(t)}function Ce(e,t){if(K(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(K(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var xe={name:"Tree",extends:oe,inheritAttrs:!1,emits:["node-expand","node-collapse","update:expandedKeys","update:selectionKeys","node-select","node-unselect","filter"],data:function(){return{d_expandedKeys:this.expandedKeys||{},filterValue:null}},watch:{expandedKeys:function(t){this.d_expandedKeys=t}},methods:{onNodeToggle:function(t){var n=t.key;this.d_expandedKeys[n]?(delete this.d_expandedKeys[n],this.$emit("node-collapse",t)):(this.d_expandedKeys[n]=!0,this.$emit("node-expand",t)),this.d_expandedKeys=b({},this.d_expandedKeys),this.$emit("update:expandedKeys",this.d_expandedKeys)},onNodeClick:function(t){if(this.selectionMode!=null&&t.node.selectable!==!1){var n=t.nodeTouched?!1:this.metaKeySelection,r=n?this.handleSelectionWithMetaKey(t):this.handleSelectionWithoutMetaKey(t);this.$emit("update:selectionKeys",r)}},onCheckboxChange:function(t){this.$emit("update:selectionKeys",t.selectionKeys),t.check?this.$emit("node-select",t.node):this.$emit("node-unselect",t.node)},handleSelectionWithMetaKey:function(t){var n=t.originalEvent,r=t.node,l=n.metaKey||n.ctrlKey,i=this.isNodeSelected(r),o;return i&&l?(this.isSingleSelectionMode()?o={}:(o=b({},this.selectionKeys),delete o[r.key]),this.$emit("node-unselect",r)):(this.isSingleSelectionMode()?o={}:this.isMultipleSelectionMode()&&(o=l?this.selectionKeys?b({},this.selectionKeys):{}:{}),o[r.key]=!0,this.$emit("node-select",r)),o},handleSelectionWithoutMetaKey:function(t){var n=t.node,r=this.isNodeSelected(n),l;return this.isSingleSelectionMode()?r?(l={},this.$emit("node-unselect",n)):(l={},l[n.key]=!0,this.$emit("node-select",n)):r?(l=b({},this.selectionKeys),delete l[n.key],this.$emit("node-unselect",n)):(l=this.selectionKeys?b({},this.selectionKeys):{},l[n.key]=!0,this.$emit("node-select",n)),l},isSingleSelectionMode:function(){return this.selectionMode==="single"},isMultipleSelectionMode:function(){return this.selectionMode==="multiple"},isNodeSelected:function(t){return this.selectionMode&&this.selectionKeys?this.selectionKeys[t.key]===!0:!1},isChecked:function(t){return this.selectionKeys?this.selectionKeys[t.key]&&this.selectionKeys[t.key].checked:!1},isNodeLeaf:function(t){return t.leaf===!1?!1:!(t.children&&t.children.length)},onFilterKeydown:function(t){(t.code==="Enter"||t.code==="NumpadEnter")&&t.preventDefault(),this.$emit("filter",{originalEvent:t,value:t.target.value})},findFilteredNodes:function(t,n){if(t){var r=!1;if(t.children){var l=ge(t.children);t.children=[];var i=T(l),o;try{for(i.s();!(o=i.n()).done;){var d=o.value,a=b({},d);this.isFilterMatched(a,n)&&(r=!0,t.children.push(a))}}catch(s){i.e(s)}finally{i.f()}}if(r)return!0}},isFilterMatched:function(t,n){var r=n.searchFields,l=n.filterText,i=n.strict,o=!1,d=T(r),a;try{for(d.s();!(a=d.n()).done;){var s=a.value,f=String(z.resolveFieldData(t,s)).toLocaleLowerCase(this.filterLocale);f.indexOf(l)>-1&&(o=!0)}}catch(U){d.e(U)}finally{d.f()}return(!o||i&&!this.isNodeLeaf(t))&&(o=this.findFilteredNodes(t,{searchFields:r,filterText:l,strict:i})||o),o}},computed:{filteredValue:function(){var t=[],n=this.filterBy.split(","),r=this.filterValue.trim().toLocaleLowerCase(this.filterLocale),l=this.filterMode==="strict",i=T(this.value),o;try{for(i.s();!(o=i.n()).done;){var d=o.value,a=b({},d),s={searchFields:n,filterText:r,strict:l};(l&&(this.findFilteredNodes(a,s)||this.isFilterMatched(a,s))||!l&&(this.isFilterMatched(a,s)||this.findFilteredNodes(a,s)))&&t.push(a)}}catch(f){i.e(f)}finally{i.f()}return t},valueToRender:function(){return this.filterValue&&this.filterValue.trim().length>0?this.filteredValue:this.value}},components:{TreeNode:R,SearchIcon:H,SpinnerIcon:D}},Ke=["placeholder"],we=["aria-labelledby","aria-label"];function Te(e,t,n,r,l,i){var o=k("SpinnerIcon"),d=k("SearchIcon"),a=k("TreeNode");return c(),y("div",u({class:e.cx("root")},e.ptmi("root")),[e.loading&&e.loadingMode==="mask"?(c(),y("div",u({key:0,class:e.cx("loadingOverlay")},e.ptm("loadingOverlay")),[M(e.$slots,"loadingicon",{class:m(e.cx("loadingIcon"))},function(){return[e.loadingIcon?(c(),y("i",u({key:0,class:[e.cx("loadingIcon"),"pi-spin",e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(c(),h(o,u({key:1,spin:"",class:e.cx("loadingIcon")},e.ptm("loadingIcon")),null,16,["class"]))]})],16)):w("",!0),e.filter?(c(),y("div",u({key:1,class:e.cx("filterContainer")},e.ptm("filterContainer")),[j(v("input",u({"onUpdate:modelValue":t[0]||(t[0]=function(s){return l.filterValue=s}),type:"text",autocomplete:"off",class:e.cx("input"),placeholder:e.filterPlaceholder,onKeydown:t[1]||(t[1]=function(){return i.onFilterKeydown&&i.onFilterKeydown.apply(i,arguments)})},e.ptm("input")),null,16,Ke),[[Z,l.filterValue]]),M(e.$slots,"searchicon",{class:m(e.cx("searchIcon"))},function(){return[_(d,u({class:e.cx("searchIcon")},e.ptm("searchIcon")),null,16,["class"])]})],16)):w("",!0),v("div",u({class:e.cx("wrapper"),style:{maxHeight:e.scrollHeight}},e.ptm("wrapper")),[v("ul",u({class:e.cx("container"),role:"tree","aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptm("container")),[(c(!0),y(C,null,F(i.valueToRender,function(s,f){return c(),h(a,{key:s.key,node:s,templates:e.$slots,level:e.level+1,index:f,expandedKeys:l.d_expandedKeys,onNodeToggle:i.onNodeToggle,onNodeClick:i.onNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,onCheckboxChange:i.onCheckboxChange,loadingMode:e.loadingMode,unstyled:e.unstyled,pt:e.pt},null,8,["node","templates","level","index","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange","loadingMode","unstyled","pt"])}),128))],16,we)],16)],16)}xe.render=Te;export{xe as default};
