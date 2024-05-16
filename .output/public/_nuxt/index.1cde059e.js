import p from"./button.esm.42d3b006.js";import{_ as v}from"./nuxt-link.5e940b48.js";import{$ as w,b as g,l as a,w as o,i as e,F as f,r as l,o as b}from"./entry.95699424.js";import"./badge.esm.d0e226d1.js";import"./basecomponent.esm.82efc321.js";import"./index.esm.063ab9bc.js";import"./baseicon.esm.5d04c19f.js";const k={class:"flex items-center justify-between"},x=e("div",{class:"text-xl font-semibold"},[e("span",null,"Hapus Berita?")],-1),y=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),N=[y],C=e("div",null,[e("span",null,"Berita yang dihapus tidak bisa dikembalikan kembali.")],-1),B={class:"w-full flex justify-end"},H={class:"flex justify-between items-center mb-3"},R=e("div",{class:"text-2xl font-semibold mb-2"},"Pengumuman",-1),$={class:"text-md font-semibold mb-2"},L={class:"grid mb-6"},M={class:"col-12"},V={class:"card"},T=["innerHTML"],j={class:"flex justify-center"},D=["href"],z=e("div",{class:"cursor-pointer"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121",d:"M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"})])],-1),E=[z],F=["onClick"],I=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121","fill-rule":"evenodd",d:"M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98","clip-rule":"evenodd"})],-1),P=[I],A=["onClick"],O=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121",d:"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"})],-1),U=[O],q={data(){return{modalRemoveNews:!1,modalRemoveNewsCategory:!1,removedNewsId:null,data:null,form:{title:null,category:null,content:null},headers:[{title:"Title",align:"start",sortable:!1,key:"title",width:"300px"},{title:"Description",align:"start",sortable:!1,key:"description",width:"300px"},{title:"Thumbnail",align:"start",key:"thumbnail"},{title:"Content",align:"end",key:"content"},{title:"Actions",align:"center",key:"actions",sortable:!1}],items:[]}},async mounted(){await this.loadData()},methods:{async loadData(){const i=await $fetch("http://api.desaku.muhichsan.com/api/announcement");this.items=i},openModalRemoveNews(i){this.modalRemoveNews=!0,this.removedNewsId=i},async removeNews(){await $fetch("http://api.desaku.muhichsan.com/api/news/"+this.removedNewsId,{method:"DELETE"}),this.modalRemoveNews=!1,await this.loadData()}}},Y=Object.assign(q,{__name:"index",setup(i){return w({title:"Pengumuman"}),(s,n)=>{const d=p,m=l("v-card"),c=l("v-dialog"),r=v,h=l("v-img"),_=l("v-data-table");return b(),g(f,null,[a(c,{modelValue:s.modalRemoveNews,"onUpdate:modelValue":n[1]||(n[1]=t=>s.modalRemoveNews=t),width:"auto"},{default:o(()=>[a(m,{height:"auto",style:{"scrollbar-width":"none"}},{title:o(()=>[e("div",k,[x,e("div",{onClick:n[0]||(n[0]=t=>s.modalRemoveNews=!1),class:"cursor-pointer"},N)])]),text:o(()=>[C]),actions:o(()=>[e("div",B,[a(d,{onClick:s.removeNews,class:"w-fit mt-6 bg-[#FC4100] text-white px-3 mx-1 mb-2 py-2 text-md",label:"Hapus"},null,8,["onClick"])])]),_:1})]),_:1},8,["modelValue"]),e("div",H,[R,e("div",$,[a(r,{to:"/dashboard/announcement/add"},{default:o(()=>[a(d,{class:"mt-3 bg-[#10B981] text-white px-3 py-2 text-md",label:"Tambah Pengumuman +"})]),_:1})])]),e("div",L,[e("div",M,[e("div",V,[a(_,{headers:s.headers,items:s.items,"item-key":"name"},{"item.content":o(({value:t})=>[e("span",{innerHTML:t.slice(0,100)},null,8,T)]),"item.thumbnail":o(({value:t})=>[a(h,{src:t,width:"100",height:"100"},null,8,["src"])]),"item.actions":o(({item:t})=>[e("div",j,[e("a",{href:`/pengumuman/${t.slug}`,target:"_blank"},E,8,D),e("div",{onClick:u=>s.$router.push("/dashboard/announcement/edit?id="+t.uuid),class:"cursor-pointer mx-1"},P,8,F),e("div",{class:"cursor-pointer",onClick:u=>s.openModalRemoveNews(t.uuid)},U,8,A)])]),_:1},8,["headers","items"])])])])],64)}}});export{Y as default};