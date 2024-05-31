import{_ as u}from"./nuxt-link.1f763de7.js";import{u as p,c as f,b as a,w as t,a as e,F as w,d as v,r as d,o as b,t as y}from"./entry.8fe0adf3.js";const k={class:"flex items-center justify-between"},V=e("div",{class:"text-xl font-semibold"},[e("span",null,"Hapus Gambar?")],-1),I=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),x=[I],C=e("div",null,[e("span",null,"Gambar yang dihapus tidak bisa dikembalikan kembali.")],-1),R={class:"w-full flex justify-end"},B=e("span",{class:"capitalize"},"Hapus",-1),L={class:"flex items-center justify-between"},z=e("div",{class:"text-xl font-semibold"},[e("span",null,"Hapus Video?")],-1),$=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),H=[$],G=e("div",{class:"mt-3"},[e("span",null,"Video yang dihapus tidak bisa dikembalikan kembali.")],-1),U=e("span",{class:"capitalize"},"Hapus",-1),j={class:"flex justify-between items-center mb-3"},A=e("div",{class:"text-2xl font-semibold mb-2"},"Gambar Galeri",-1),E={class:"text-md font-semibold mb-2"},P=e("span",{class:"capitalize"},"Tambah Gambar +",-1),M={class:"grid animate-fade mb-6"},D={class:"col-12"},T={class:"card"},F={class:"flex justify-center"},N=["onClick"],O=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121","fill-rule":"evenodd",d:"M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98","clip-rule":"evenodd"})],-1),S=[O],q={class:"flex justify-center"},J=["onClick"],K=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121",d:"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"})],-1),Q=[K],W={class:"flex justify-between items-center mb-3"},X=e("div",{class:"text-2xl font-semibold mb-2"},"Video",-1),Y={class:"text-md font-semibold mb-2"},Z=e("span",{class:"capitalize"},"Tambah Video +",-1),ee={class:"grid animate-fade mb-6"},te={class:"col-12"},oe={class:"card"},se=["href"],ae={class:"flex float-right"},ie=["onClick"],le=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121",d:"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"})],-1),de=[le],ne={data(){return{modalRemoveImage:!1,modalRemoveVideo:!1,modalRemoveNewsCategory:!1,removedVideoId:null,data:null,renderRichEditor:!1,form:{title:null,category:null,content:null},headersImages:[{title:"Description",align:"start",sortable:!1,key:"description",width:"300px"},{title:"Image",align:"start",key:"url"},{title:"Actions",align:"center",key:"actions",sortable:!1}],headersVideos:[{title:"Description",align:"start",sortable:!1,key:"description",width:"300px"},{title:"Video",align:"start",key:"url"},{title:"Actions",align:"end",key:"actions",sortable:!1}],images:[],videos:[],loadingImage:!1,loadingVideo:!1}},async mounted(){await this.loadImage(),await this.loadVideo()},methods:{async loadImage(){this.loadingImage=!0;const i=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/image-gallery");this.images=i,this.loadingImage=!1},async loadVideo(){this.loadingVideo=!0;const{data:i}=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/video-gallery");this.videos=i,this.loadingVideo=!1},openModalRemoveImages(i){this.modalRemoveImage=!0,this.removedImageId=i},openModalRemoveVideos(i){this.modalRemoveVideo=!0,this.removedVideoId=i},async removeImageGallery(){await $fetch(this.$config.public.API_PUBLIC_URL+"/api/image-gallery/"+this.removedImageId,{method:"DELETE",headers:{Authorization:"Bearer "+v().token}}),this.modalRemoveImage=!1,await this.loadImage()},async removeVideoGallery(){await $fetch(this.$config.public.API_PUBLIC_URL+"/api/video-gallery/"+this.removedVideoId,{method:"DELETE",headers:{Authorization:"Bearer "+v().token}}),this.modalRemoveVideo=!1,await this.loadVideo()}}},re=Object.assign(ne,{__name:"index",setup(i){return p({title:"Galeri"}),(o,l)=>{const n=d("v-btn"),m=d("v-card"),c=d("v-dialog"),r=u,g=d("v-img"),h=d("v-data-table");return b(),f(w,null,[a(c,{modelValue:o.modalRemoveImage,"onUpdate:modelValue":l[1]||(l[1]=s=>o.modalRemoveImage=s),width:"auto"},{default:t(()=>[a(m,{height:"auto",style:{"scrollbar-width":"none"}},{title:t(()=>[e("div",k,[V,e("div",{onClick:l[0]||(l[0]=s=>o.modalRemoveImage=!1),class:"cursor-pointer"},x)])]),text:t(()=>[C]),actions:t(()=>[e("div",R,[a(n,{onClick:o.removeImageGallery,variant:"flat",color:"#FC4100",class:"mt-6 text-white px-3 py-2 text-md"},{default:t(()=>[B]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"]),a(c,{modelValue:o.modalRemoveVideo,"onUpdate:modelValue":l[3]||(l[3]=s=>o.modalRemoveVideo=s),width:"auto"},{default:t(()=>[a(m,{height:"auto",style:{"scrollbar-width":"none"},class:"pa-4 px-4"},{actions:t(()=>[a(n,{onClick:o.removeVideoGallery,variant:"flat",color:"#FC4100",class:"mt-6 text-white px-3 py-2 text-md"},{default:t(()=>[U]),_:1},8,["onClick"])]),default:t(()=>[e("div",L,[z,e("div",{onClick:l[2]||(l[2]=s=>o.modalRemoveVideo=!1),class:"cursor-pointer"},H)]),G]),_:1})]),_:1},8,["modelValue"]),e("div",j,[A,e("div",E,[a(r,{to:"/dashboard/gallery/image/add"},{default:t(()=>[a(n,{color:"#10B981",class:"mt-3 text-white px-3 py-2"},{default:t(()=>[P]),_:1})]),_:1})])]),e("div",M,[e("div",D,[e("div",T,[a(h,{loading:o.loadingImage,headers:o.headersImages,items:o.images,"item-key":"name"},{bottom:t(()=>[]),"item.url":t(({value:s})=>[a(g,{src:s,width:"100",height:"100"},null,8,["src"])]),"item.actions":t(({item:s})=>[e("div",F,[e("div",{onClick:_=>o.$router.push("/dashboard/gallery/image/edit?id="+s.uuid),class:"cursor-pointer mx-1"},S,8,N),e("div",q,[e("div",{class:"cursor-pointer",onClick:_=>o.openModalRemoveImages(s.uuid)},Q,8,J)])])]),_:1},8,["loading","headers","items"])])])]),e("div",W,[X,e("div",Y,[a(r,{to:"/dashboard/gallery/video/add"},{default:t(()=>[a(n,{color:"#10B981",class:"mt-3 text-white px-3 py-2"},{default:t(()=>[Z]),_:1})]),_:1})])]),e("div",ee,[e("div",te,[e("div",oe,[a(h,{loading:o.loadingVideo,headers:o.headersVideos,items:o.videos,"item-key":"name"},{bottom:t(()=>[]),"item.url":t(({value:s})=>[e("a",{target:"_blank",href:s},y(s),9,se)]),"item.actions":t(({item:s})=>[e("div",ae,[e("div",{class:"cursor-pointer",onClick:_=>o.openModalRemoveVideos(s.uuid)},de,8,ie)])]),_:1},8,["loading","headers","items"])])])])],64)}}});export{re as default};
