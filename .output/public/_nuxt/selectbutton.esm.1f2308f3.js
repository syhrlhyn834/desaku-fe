import{B as g,D as f,O as d,R as v,a as S,o as p,b,F as O,f as A,s as x,m as h,h as E,i as w,t as D,k as K}from"./entry.2ba41e71.js";import{s as I}from"./basecomponent.esm.d752fcf6.js";var V={root:function(e){var n=e.props;return["p-selectbutton p-button-group p-component",{"p-disabled":n.disabled,"p-invalid":n.invalid}]},button:function(e){var n=e.instance,a=e.option;return["p-button p-component",{"p-highlight":n.isSelected(a),"p-disabled":n.isOptionDisabled(a)}]},label:"p-button-label"},B=g.extend({name:"selectbutton",classes:V}),T={name:"BaseSelectButton",extends:I,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,unselectable:{type:Boolean,default:!0},allowEmpty:{type:Boolean,default:!0},invalid:{type:Boolean,default:!1},disabled:Boolean,dataKey:null,ariaLabelledby:{type:String,default:null}},style:B,provide:function(){return{$parentInstance:this}}};function L(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=y(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var a=0,u=function(){};return{s:u,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(s){throw s},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r=!0,o=!1,i;return{s:function(){n=n.call(t)},n:function(){var s=n.next();return r=s.done,s},e:function(s){o=!0,i=s},f:function(){try{!r&&n.return!=null&&n.return()}finally{if(o)throw i}}}}function k(t){return P(t)||q(t)||y(t)||F()}function F(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(t,e){if(t){if(typeof t=="string")return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}}function q(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function P(t){if(Array.isArray(t))return m(t)}function m(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var R={name:"SelectButton",extends:T,inheritAttrs:!1,emits:["update:modelValue","focus","blur","change"],data:function(){return{focusedIndex:0}},mounted:function(){this.defaultTabIndexes()},methods:{defaultTabIndexes:function(){for(var e=f.find(this.$refs.container,'[data-pc-section="button"]'),n=f.findSingle(this.$refs.container,'[data-p-highlight="true"]'),a=0;a<e.length;a++)(f.getAttribute(e[a],"data-p-highlight")===!0&&d.equals(e[a],n)||n===null&&a==0)&&(this.focusedIndex=a)},getOptionLabel:function(e){return this.optionLabel?d.resolveFieldData(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?d.resolveFieldData(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?d.resolveFieldData(e,this.dataKey):this.getOptionLabel(e)},getPTOptions:function(e,n){return this.ptm(n,{context:{active:this.isSelected(e),disabled:this.isOptionDisabled(e),option:e}})},isOptionDisabled:function(e){return this.optionDisabled?d.resolveFieldData(e,this.optionDisabled):!1},onOptionSelect:function(e,n,a){var u=this;if(!(this.disabled||this.isOptionDisabled(n))){var r=this.isSelected(n);if(!(r&&!(this.unselectable&&this.allowEmpty))){var o=this.getOptionValue(n),i;this.multiple?r?i=this.modelValue.filter(function(l){return!d.equals(l,o,u.equalityKey)}):i=this.modelValue?[].concat(k(this.modelValue),[o]):[o]:i=r?null:o,this.focusedIndex=a,this.$emit("update:modelValue",i),this.$emit("change",{event:e,value:i})}}},isSelected:function(e){var n=!1,a=this.getOptionValue(e);if(this.multiple){if(this.modelValue){var u=L(this.modelValue),r;try{for(u.s();!(r=u.n()).done;){var o=r.value;if(d.equals(o,a,this.equalityKey)){n=!0;break}}}catch(i){u.e(i)}finally{u.f()}}}else n=d.equals(this.modelValue,a,this.equalityKey);return n},onKeydown:function(e,n,a){switch(e.code){case"Space":{this.onOptionSelect(e,n,a),e.preventDefault();break}case"ArrowDown":case"ArrowRight":{this.onArrowRightKey(e.target),e.preventDefault();break}case"ArrowUp":case"ArrowLeft":{this.onArrowLeftKey(e.target),e.preventDefault();break}}},onArrowRightKey:function(e){var n=this.findNextElement(e);n&&(this.focusedIndex=d.findIndexInList(n,this.findAllElements()),f.focus(n))},onArrowLeftKey:function(e){var n=this.findPrevElement(e);n&&(this.focusedIndex=d.findIndexInList(n,this.findAllElements()),f.focus(n))},findAllElements:function(){return f.find(this.$refs.container,'[data-pc-section="button"]')},findNextElement:function(e){return e.nextElementSibling?f.getAttribute(e.nextElementSibling,"data-p-disabled")?this.findNextElement(e.nextElementSibling):e.nextElementSibling:null},findPrevElement:function(e){return e.previousElementSibling?f.getAttribute(e.previousElementSibling,"data-p-disabled")?this.findPrevElement(e.previousElementSibling):e.previousElementSibling:null},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e,n){e.target&&e.relatedTarget&&e.target.parentElement!==e.relatedTarget.parentElement&&this.defaultTabIndexes(),this.$emit("blur",e,n)},findTabindex:function(e,n){return this.disabled||this.isOptionDisabled(e)||n!==this.focusedIndex?"-1":"0"}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:v}},C=["aria-labelledby"],j=["tabindex","aria-label","role","aria-checked","aria-disabled","onClick","onKeydown","onBlur","data-p-highlight","data-p-disabled"];function N(t,e,n,a,u,r){var o=S("ripple");return p(),b("div",h({ref:"container",class:t.cx("root"),role:"group","aria-labelledby":t.ariaLabelledby},t.ptmi("root")),[(p(!0),b(O,null,A(t.options,function(i,l){return x((p(),b("div",h({key:r.getOptionRenderKey(i),tabindex:r.findTabindex(i,l),"aria-label":r.getOptionLabel(i),role:t.multiple?"checkbox":"radio","aria-checked":r.isSelected(i),"aria-disabled":r.isOptionDisabled(i),class:t.cx("button",{option:i}),onClick:function(c){return r.onOptionSelect(c,i,l)},onKeydown:function(c){return r.onKeydown(c,i,l)},onFocus:e[0]||(e[0]=function(s){return r.onFocus(s)}),onBlur:function(c){return r.onBlur(c,i)}},r.getPTOptions(i,"button"),{"data-p-highlight":r.isSelected(i),"data-p-disabled":r.isOptionDisabled(i)}),[E(t.$slots,"option",{option:i,index:l,class:K(t.cx("label"))},function(){return[w("span",h({class:t.cx("label")},r.getPTOptions(i,"label")),D(r.getOptionLabel(i)),17)]})],16,j)),[[o]])}),128))],16,C)}R.render=N;export{R as default};
