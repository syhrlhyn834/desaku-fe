import{s as h}from"./index.esm.312e531e.js";import{s as b}from"./index.esm.47ff8948.js";import{s as m}from"./basecomponent.esm.d752fcf6.js";import{B as f,r as c,o as k,b as v,i as s,m as n,t as g,h as o,l as u,k as r}from"./entry.2ba41e71.js";import"./baseicon.esm.26b87126.js";var y={root:function(a){var t=a.instance,i=a.props;return["p-tristatecheckbox p-checkbox p-component",{"p-highlight":t.active,"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant==="filled"||t.$primevue.config.inputStyle==="filled"}]},box:"p-checkbox-box",input:"p-checkbox-input",checkIcon:"p-checkbox-icon",uncheckIcon:"p-checkbox-icon",nullableIcon:"p-checkbox-icon"},I=f.extend({name:"tristatecheckbox",classes:y}),V={name:"BaseTriStateCheckbox",extends:m,props:{modelValue:null,variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:I,provide:function(){return{$parentInstance:this}}},C={name:"TriStateCheckbox",extends:V,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur"],methods:{getPTOptions:function(a){var t=a==="root"?this.ptmi:this.ptm;return t(a,{context:{active:this.active,disabled:this.disabled}})},updateModel:function(){var a;switch(this.modelValue){case!0:a=!1;break;case!1:a=null;break;default:a=!0;break}this.$emit("update:modelValue",a)},onChange:function(a){!this.disabled&&!this.readonly&&(this.updateModel(),this.$emit("change",a))},onFocus:function(a){this.$emit("focus",a)},onBlur:function(a){this.$emit("blur",a)}},computed:{active:function(){return this.modelValue!=null},checked:function(){return this.modelValue===!0},ariaValueLabel:function(){return this.modelValue?this.$primevue.config.locale.aria.trueLabel:this.modelValue===!1?this.$primevue.config.locale.aria.falseLabel:this.$primevue.config.locale.aria.nullLabel}},components:{CheckIcon:h,TimesIcon:b}},S=["data-p-highlight","data-p-disabled"],B=["id","value","checked","tabindex","disabled","readonly","aria-labelledby","aria-label","aria-invalid"];function T(e,a,t,i,L,l){var d=c("CheckIcon"),p=c("TimesIcon");return k(),v("div",n({class:e.cx("root")},l.getPTOptions("root"),{"data-p-highlight":l.active,"data-p-disabled":e.disabled}),[s("input",n({id:e.inputId,type:"checkbox",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.modelValue,checked:l.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:a[0]||(a[0]=function(){return l.onFocus&&l.onFocus.apply(l,arguments)}),onBlur:a[1]||(a[1]=function(){return l.onBlur&&l.onBlur.apply(l,arguments)}),onChange:a[2]||(a[2]=function(){return l.onChange&&l.onChange.apply(l,arguments)})},l.getPTOptions("input")),null,16,B),s("span",n({role:"status",class:"p-hidden-accessible","aria-live":"polite"},l.getPTOptions("hiddenValueLabel"),{"data-p-hidden-accessible":!0}),g(l.ariaValueLabel),17),s("div",n({class:e.cx("box")},l.getPTOptions("box")),[e.modelValue===!0?o(e.$slots,"checkicon",{key:0,class:r(e.cx("checkIcon"))},function(){return[u(d,n({class:e.cx("checkIcon")},l.getPTOptions("checkIcon")),null,16,["class"])]}):e.modelValue===!1?o(e.$slots,"uncheckicon",{key:1,class:r(e.cx("uncheckIcon"))},function(){return[u(p,n({class:e.cx("uncheckIcon")},l.getPTOptions("uncheckIcon")),null,16,["class"])]}):o(e.$slots,"nullableicon",{key:2,class:r(e.cx("nullableIcon"))})],16)],16,S)}C.render=T;export{C as default};
