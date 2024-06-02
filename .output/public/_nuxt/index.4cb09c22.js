import{_ as f}from"./nuxt-link.e17501f8.js";import{u as k,c as o,b as n,w as a,a as e,F as b,g as y,r as c,o as i,t as C,l as m,y as r,m as h}from"./entry.c8f12125.js";const P={class:"flex items-center justify-between"},x=e("div",{class:"text-xl font-semibold"},[e("span",null,"Hapus Pengumuman?")],-1),T=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),N=[T],B=e("div",null,[e("span",null,"Pengumuman yang dihapus tidak bisa dikembalikan kembali.")],-1),L={class:"w-full flex justify-end"},R=e("span",{class:"capitalize"},"Hapus",-1),D={class:"flex justify-between items-center mb-3"},A=e("div",{class:"text-2xl font-semibold mb-2"},"Pengumuman",-1),H={class:"text-md font-semibold mb-2"},J=e("span",{class:"capitalize"},"Tambah Pengumuman +",-1),W={class:"grid animate-fade mb-6"},$={class:"col-12"},V={class:"card"},z=["innerHTML"],I={key:1},M={class:"flex justify-center"},j=["href"],U=e("div",{class:"cursor-pointer"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121",d:"M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"})])],-1),E=[U],F=["onClick"],O=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121","fill-rule":"evenodd",d:"M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98","clip-rule":"evenodd"})],-1),S=[O],q=["onClick"],G=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121",d:"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"})],-1),K=[G],Q={data(){return{laodingData:!1,modalRemoveNews:!1,modalRemoveNewsCategory:!1,removedAnnouncementId:null,data:null,form:{title:null,category:null,content:null},headers:[{title:"Title",align:"start",sortable:!1,key:"title",width:"300px"},{title:"Description",align:"start",sortable:!1,key:"description",width:"300px"},{title:"Content",align:"end",key:"content"},{title:"Actions",align:"center",key:"actions",sortable:!1}],items:[]}},async mounted(){await this.loadData()},methods:{async loadData(){this.loadingData=!0;const{data:l}=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/announcement");this.items=l,this.loadingData=!1},openModalRemoveAnnouncement(l){this.modalRemoveNews=!0,this.removedAnnouncementId=l},async removeNews(){await $fetch(this.$config.public.API_PUBLIC_URL+"/api/announcement/"+this.removedAnnouncementId,{method:"DELETE",headers:{Authorization:"Bearer "+y().token}}),this.modalRemoveNews=!1,await this.loadData()}}},Z=Object.assign(Q,{__name:"index",setup(l){return k({title:"Pengumuman"}),(t,d)=>{const u=c("v-btn"),_=c("v-card"),v=c("v-dialog"),p=f,w=c("v-data-table");return i(),o(b,null,[n(v,{modelValue:t.modalRemoveNews,"onUpdate:modelValue":d[1]||(d[1]=s=>t.modalRemoveNews=s),width:"auto"},{default:a(()=>[n(_,{height:"auto",style:{"scrollbar-width":"none"}},{title:a(()=>[e("div",P,[x,e("div",{onClick:d[0]||(d[0]=s=>t.modalRemoveNews=!1),class:"cursor-pointer"},N)])]),text:a(()=>[B]),actions:a(()=>[e("div",L,[n(u,{variant:"flat",onClick:t.removeNews,color:"#FC4100",class:"w-fit mt-6 text-white px-3 mx-1 mb-2 py-2 text-md"},{default:a(()=>[R]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"]),e("div",D,[A,e("div",H,[n(p,{to:"/dashboard/announcement/add"},{default:a(()=>[n(u,{onClick:t.updateContent,color:"#10B981",class:"mt-3 text-white px-3 py-2"},{default:a(()=>[J]),_:1},8,["onClick"])]),_:1})])]),e("div",W,[e("div",$,[e("div",V,[n(w,{loading:t.loadingData,headers:t.headers,items:t.items,"item-key":"name"},{bottom:a(()=>[]),"item.content":a(({value:s})=>[s?(i(),o("span",{key:0,innerHTML:s.slice(0,100)},null,8,z)):(i(),o("span",I,"-"))]),"item.description":a(({value:s})=>[e("span",null,C(s.slice(0,80))+"...",1)]),"item.actions":a(({item:s})=>[e("div",M,[e("a",{href:`/pengumuman/${s.slug}`,target:"_blank"},E,8,j),("useParseJWT"in t?t.useParseJWT:m(r))().value.is_admin==1||("useParseJWT"in t?t.useParseJWT:m(r))().value.user==s.user_id?(i(),o("div",{key:0,onClick:g=>t.$router.push("/dashboard/announcement/edit?id="+s.uuid),class:"cursor-pointer mx-1"},S,8,F)):h("",!0),("useParseJWT"in t?t.useParseJWT:m(r))().value.is_admin==1||("useParseJWT"in t?t.useParseJWT:m(r))().value.user==s.user_id?(i(),o("div",{key:1,class:"cursor-pointer",onClick:g=>t.openModalRemoveAnnouncement(s.uuid)},K,8,q)):h("",!0)])]),_:1},8,["loading","headers","items"])])])])],64)}}});export{Z as default};
