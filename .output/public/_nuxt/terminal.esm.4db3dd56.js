import{E as c,B as u,o as a,b as p,n as f,m as t,t as m,e as v,i as s,F as y,f as T,s as h,z as g}from"./entry.2ba41e71.js";import{s as w}from"./basecomponent.esm.d752fcf6.js";var l=c(),k={root:"p-terminal p-component",content:"p-terminal-content",prompt:"p-terminal-prompt",command:"p-terminal-command",response:"p-terminal-response",container:"p-terminal-prompt-container",commandText:"p-terminal-input"},S=u.extend({name:"terminal",classes:k}),x={name:"BaseTerminal",extends:w,props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},style:S,provide:function(){return{$parentInstance:this}}},B={name:"Terminal",extends:x,inheritAttrs:!1,data:function(){return{commandText:null,commands:[]}},mounted:function(){l.on("response",this.responseListener),this.$refs.input.focus()},updated:function(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount:function(){l.off("response",this.responseListener)},methods:{onClick:function(){this.$refs.input.focus()},onKeydown:function(n){(n.code==="Enter"||n.code==="NumpadEnter")&&this.commandText&&(this.commands.push({text:this.commandText}),l.emit("command",this.commandText),this.commandText="")},responseListener:function(n){this.commands[this.commands.length-1].response=n}}};function C(e,n,K,L,i,o){return a(),p("div",t({class:e.cx("root"),onClick:n[2]||(n[2]=function(){return o.onClick&&o.onClick.apply(o,arguments)})},e.ptmi("root")),[e.welcomeMessage?(a(),p("div",f(t({key:0},e.ptm("welcomeMessage"))),m(e.welcomeMessage),17)):v("",!0),s("div",t({class:e.cx("content")},e.ptm("content")),[(a(!0),p(y,null,T(i.commands,function(r,d){return a(),p("div",t({key:r.text+d.toString()},e.ptm("commands")),[s("span",t({class:e.cx("prompt")},e.ptm("prompt")),m(e.prompt),17),s("span",t({class:e.cx("command")},e.ptm("command")),m(r.text),17),s("div",t({class:e.cx("response"),"aria-live":"polite"},e.ptm("response")),m(r.response),17)],16)}),128))],16),s("div",t({class:e.cx("container")},e.ptm("container")),[s("span",t({class:e.cx("prompt")},e.ptm("prompt")),m(e.prompt),17),h(s("input",t({ref:"input","onUpdate:modelValue":n[0]||(n[0]=function(r){return i.commandText=r}),type:"text",class:e.cx("commandText"),autocomplete:"off",onKeydown:n[1]||(n[1]=function(){return o.onKeydown&&o.onKeydown.apply(o,arguments)})},e.ptm("commandText")),null,16),[[g,i.commandText]])],16)],16)}B.render=C;export{B as default};
