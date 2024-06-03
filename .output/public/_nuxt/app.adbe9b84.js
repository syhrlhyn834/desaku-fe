import{a5 as E,a6 as N,a7 as K,C as R,a8 as G,a9 as F,aa as U,i as C,D as Y,E as q,j as S,r as k,o as d,c as $,b as a,w as m,l as P,a as e,t as x,q as Z,K as B,m as D,a2 as J,v as Q,F as T,h as H,_ as M,x as X,n as ee,e as y,p as te,f as se,z as ne,u as oe}from"./entry.e4bf559d.js";function L(i){var n;const r=F(i);return(n=r==null?void 0:r.$el)!=null?n:r}const O=K?window:void 0;function I(...i){let n,r,o,f;if(typeof i[0]=="string"||Array.isArray(i[0])?([r,o,f]=i,n=O):[n,r,o,f]=i,!n)return E;Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]);const _=[],b=()=>{_.forEach(h=>h()),_.length=0},u=(h,w,s,t)=>(h.addEventListener(w,s,t),()=>h.removeEventListener(w,s,t)),c=R(()=>[L(n),F(f)],([h,w])=>{if(b(),!h)return;const s=G(w)?{...w}:w;_.push(...r.flatMap(t=>o.map(v=>u(h,t,v,s))))},{immediate:!0,flush:"post"}),g=()=>{c(),b()};return U(g),g}let V=!1;function le(i,n,r={}){const{window:o=O,ignore:f=[],capture:_=!0,detectIframe:b=!1}=r;if(!o)return E;N&&!V&&(V=!0,Array.from(o.document.body.children).forEach(s=>s.addEventListener("click",E)),o.document.documentElement.addEventListener("click",E));let u=!0;const c=s=>f.some(t=>{if(typeof t=="string")return Array.from(o.document.querySelectorAll(t)).some(v=>v===s.target||s.composedPath().includes(v));{const v=L(t);return v&&(s.target===v||s.composedPath().includes(v))}}),h=[I(o,"click",s=>{const t=L(i);if(!(!t||t===s.target||s.composedPath().includes(t))){if(s.detail===0&&(u=!c(s)),!u){u=!0;return}n(s)}},{passive:!0,capture:_}),I(o,"pointerdown",s=>{const t=L(i);u=!c(s)&&!!(t&&!s.composedPath().includes(t))},{passive:!0}),b&&I(o,"blur",s=>{setTimeout(()=>{var t;const v=L(i);((t=o.document.activeElement)==null?void 0:t.tagName)==="IFRAME"&&!(v!=null&&v.contains(o.document.activeElement))&&n(s)},0)})].filter(Boolean);return()=>h.forEach(s=>s())}const ae={class:"block min-h-screen pb-10 px-3 py-4"},ie={class:"flex justify-between cursor-pointer border-b border-slate-200 pb-4"},re={class:"ml-3 block font-semibold"},ce={class:"text-sm"},de=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 28 28"},[e("path",{fill:"black",d:"M20.48 3.512a11.966 11.966 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.966 11.966 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.789 9.789 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.789 9.789 0 0 1 2.876-6.943a9.786 9.786 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.785 9.785 0 0 1-2.876 6.942z"}),e("path",{fill:"black",d:"m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z"})],-1),ue=[de],me={class:"h-screen"},_e={id:"header",class:"surface-0 flex justify-content-center"},pe={id:"home",class:"w-100 overflow-hidden justify-between"},he={class:"flex w-full px-[1rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] bg-[#0088CC] py-2"},ve={class:"flex items-center mr-3"},fe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"white",d:"m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"})],-1),ge={class:"ml-1 text-sm md:text-base text-white"},we={class:"flex text-sm md:text-base items-center"},be=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"white",d:"m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"})],-1),xe={class:"text-white ml-2"},$e=["src"],ke={class:"ml-3 block font-semibold"},Ce={class:"text-sm"},ye={class:"items-center justify-between flex px-0 md:px-6 lg:px-0 z-2"},Pe={class:"list-none p-0 m-0 items-center select-none md:flex hidden cursor-pointer"},Be={class:"mr-3"},De=e("span",null,"Profil Desa",-1),Me=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"#0088CC","fill-rule":"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z","clip-rule":"evenodd"})],-1),Le=[De,Me],Ee={class:"block border-t-4 border-[#0088CC] shadow-md rounded-md cursor-pointer mt-4 bg-white px-4 py-5"},Ae={class:"mr-3"},ze=e("span",null,"Pemerintahan",-1),Ie=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"#0088CC","fill-rule":"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z","clip-rule":"evenodd"})],-1),Se=[ze,Ie],je={class:"block border-t-4 border-[#0088CC] shadow-md rounded-md cursor-pointer mt-4 bg-white px-4 py-5"},He={class:"mr-3"},Ve=e("span",null,"Informasi Publik",-1),Fe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"#0088CC","fill-rule":"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z","clip-rule":"evenodd"})],-1),Te=[Ve,Fe],Oe={class:"block border-t-4 border-[#0088CC] shadow-md rounded-md cursor-pointer mt-4 bg-white px-4 py-5"},We=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"white",d:"M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 0 1 0-1.99h8.01c.55 0 .995.445.995.995M22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 1 1 0-1.99h18.01c.55 0 .995.446.995.995m-.995-5.01a.995.995 0 0 0 0-1.99H8.995a.995.995 0 1 0 0 1.99z"})],-1),Ne=[We],Ke={data:()=>({open:["Users"],admins:[["Management"],["Settings"]],cruds:[["Create"],["Read"],["Update"],["Delete"]],items:[{type:"header",title:"Beranda",value:"/"},{type:"divider"},{type:"header",title:"Potensi Desa",value:"potensi-desa"},{type:"subheader",title:"Profil Desa"},{title:"Tentang Desa",value:"tentang-desa"},{title:"Visi & Misi",value:"visi-misi"},{title:"Sejarah Desa",value:"sejarah-desa"},{type:"divider"},{type:"subheader",title:"Pemerintahan"},{title:"Struktur Organisasi",value:"struktur-organisasi"},{title:"Perangkat Desa",value:"perangkat-desa"},{title:"Lembaga Desa",value:"lembaga-desa"},{type:"divider"},{type:"subheader",title:"Informasi Publik"},{title:"Galeri",value:"galeri"},{title:"Berita",value:"berita"},{title:"Pengumuman",value:"pengumuman"},{title:"Kegiatan",value:"kegiatan"}]})},Re=Object.assign(Ke,{__name:"Header",async setup(i){let n,r;const o=C(!1),f=C(null),_=C(!1),b=C(null),u=C(null),c=Y({no_telp:null,email:null,logo:null,site_name:null,description:null});q(async()=>{window.addEventListener("scroll",function(){window.scrollY>document.getElementById("header").offsetHeight?o.value=!0:o.value=!1}),window.addEventListener("resize",function(){f.value=window.innerWidth})});const g=([n,r]=S(()=>$fetch("/api/header")),n=await n,r(),n);c.no_telp=g.no_telp,c.email=g.email,c.site_name=g.site_name,c.description=g.description,c.logo=g.logo;function h(){_.value=!_.value,_.value?document.documentElement.classList.add("overflow-hidden"):document.documentElement.classList.remove("overflow-hidden")}function w(){_.value=!1,document.documentElement.classList.remove("overflow-hidden"),setTimeout(()=>{if(u.value=="/"){H().push("/");return}H().push(`/${u.value}`)},500)}return le(b,s=>{_.value=!1,document.documentElement.classList.remove("overflow-hidden")}),(s,t)=>{const v=k("v-img"),p=k("v-list-item"),A=k("v-list-group"),W=k("v-list"),z=k("v-menu");return d(),$(T,null,[a(J,null,{default:m(()=>[P(_)?(d(),$("div",{key:0,ref_key:"target",ref:b,class:"bg-white shadow-lg min-h-screen fixed w-3/4 right-0",style:{"z-index":"9999"}},[e("div",ae,[e("div",ie,[e("div",{class:"flex-none flex items-center",onClick:t[0]||(t[0]=l=>s.$router.push("/"))},[a(v,{width:"40","aspect-ratio":"1",cover:"","lazy-src":c.logo,src:c.logo,alt:""},null,8,["lazy-src","src"]),e("div",re,[e("div",null,[e("span",null,x(c.site_name),1)]),e("div",ce,[e("span",null,x(c.description),1)])])]),e("div",{class:"flex items-center",onClick:h},ue)]),e("div",me,[a(W,{selectable:"",opened:"profil-desa",selected:P(u),"onUpdate:selected":[t[1]||(t[1]=l=>Z(u)?u.value=l:null),w]},{default:m(()=>[a(p,{title:"Beranda",value:""}),a(p,{title:"Potensi Desa",value:"potensi-desa"}),a(A,{value:"profiil-desa"},{activator:m(({props:l})=>[a(p,B(l,{title:"Profil Desa"}),null,16)]),default:m(()=>[a(p,{title:"Tentang Desa",value:"tentang-desa"}),a(p,{title:"Visi Misi",value:"visi-misi"}),a(p,{title:"Sejarah Desa",value:"sejarah-desa"})]),_:1}),a(A,null,{activator:m(({props:l})=>[a(p,B(l,{title:"Pemerintahan"}),null,16)]),default:m(()=>[a(p,{title:"Struktur Organisasi",value:"struktur-organisasi"}),a(p,{title:"Lembaga Desa",value:"lembaga-desa"}),a(p,{title:"Perangkat Desa",value:"perangkat-desa"})]),_:1}),a(A,null,{activator:m(({props:l})=>[a(p,B(l,{title:"Informasi Publik"}),null,16)]),default:m(()=>[a(p,{title:"Berita",value:"berita"}),a(p,{title:"Pengumuman",value:"pengumuman"}),a(p,{title:"Kegiatan",value:"kegiatan"}),a(p,{title:"Galeri Desa",value:"galeri"})]),_:1})]),_:1},8,["selected"])])])],512)):D("",!0)]),_:1}),e("div",_e,[e("div",pe,[e("div",he,[e("div",ve,[fe,e("div",ge,x(c.no_telp??"-"),1)]),e("div",we,[be,e("div",xe,x(c.email??"-"),1)])]),e("div",{class:Q([{"fixed top-0 z-50 animation":P(o)},"py-4 px-[1rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] w-full flex items-center bg-white/80 backdrop-blur-sm justify-between top-8"])},[e("div",{class:"flex cursor-pointer",onClick:t[2]||(t[2]=l=>s.$router.push("/"))},[e("img",{width:"40",src:c.logo,alt:""},null,8,$e),e("div",ke,[e("div",null,[e("span",null,x(c.site_name),1)]),e("div",Ce,[e("span",null,x(c.description),1)])])]),e("div",ye,[e("ul",Pe,[e("div",{onClick:t[3]||(t[3]=l=>s.$router.push("/")),class:"font-semibold text-[#0088CC] mr-5 border-slate-300"}," Beranda"),e("div",{onClick:t[4]||(t[4]=l=>s.$router.push("/potensi-desa")),class:"font-semibold text-[#0088CC] mr-5 border-slate-300"}," Potensi Desa"),e("div",Be,[a(z,{"open-on-hover":""},{activator:m(({props:l})=>[e("div",B(l,{class:"flex font-semibold text-[#0088CC] items-center"}),Le,16)]),default:m(()=>[e("div",Ee,[e("div",{onClick:t[5]||(t[5]=l=>s.$router.push("/tentang-desa")),class:"mb-2 border-b border-slate-300 pb-3"}," Tentang Desa"),e("div",{onClick:t[6]||(t[6]=l=>s.$router.push("/visi-misi")),class:"mb-2 border-b border-slate-300 pb-3"}," Visi & Misi"),e("div",{onClick:t[7]||(t[7]=l=>s.$router.push("/sejarah-desa"))},"Sejarah Desa")])]),_:1})]),e("div",Ae,[a(z,{"open-on-hover":""},{activator:m(({props:l})=>[e("div",B(l,{class:"flex font-semibold text-[#0088CC] items-center"}),Se,16)]),default:m(()=>[e("div",je,[e("div",{onClick:t[8]||(t[8]=l=>s.$router.push("/struktur-organisasi")),class:"mb-2 border-b border-slate-300 pb-3"}," Struktur Organisasi"),e("div",{onClick:t[9]||(t[9]=l=>s.$router.push("/lembaga-desa")),class:"mb-2 border-b border-slate-300 pb-3"}," Lembaga Desa"),e("div",{onClick:t[10]||(t[10]=l=>s.$router.push("/perangkat-desa"))},"Perangkat Desa")])]),_:1})]),e("div",He,[a(z,{"open-on-hover":""},{activator:m(({props:l})=>[e("div",B(l,{class:"flex font-semibold text-[#0088CC] items-center"}),Te,16)]),default:m(()=>[e("div",Oe,[e("div",{onClick:t[11]||(t[11]=l=>s.$router.push("/galeri")),class:"mb-2 border-b border-slate-300 pb-3"}," Galeri"),e("div",{onClick:t[12]||(t[12]=l=>s.$router.push("/berita")),class:"mb-2 border-b border-slate-300 pb-3"}," Berita"),e("div",{onClick:t[13]||(t[13]=l=>s.$router.push("/pengumuman")),class:"mb-2 border-b border-slate-300 pb-3"}," Pengumuman"),e("div",{onClick:t[14]||(t[14]=l=>s.$router.push("/kegiatan"))}," Kegiatan")])]),_:1})])]),e("div",{onClick:h,class:"md:hidden cursor-pointer bg-[#0088CC] pa-2 rounded-lg"},Ne)])],2)])])],64)}}}),Ge={},Ue={xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 24 24"},Ye=e("path",{fill:"white",d:"M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"},null,-1),qe=[Ye];function Ze(i,n){return d(),$("svg",Ue,qe)}const Je=M(Ge,[["render",Ze]]),Qe={},Xe={class:"mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 24 24"},et=e("path",{fill:"white",d:"M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"},null,-1),tt=[et];function st(i,n){return d(),$("svg",Xe,tt)}const nt=M(Qe,[["render",st]]),ot={},lt={class:"mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 14 14"},at=X('<g fill="none"><g clip-path="url(#primeTwitter0)"><path fill="white" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"></path></g><defs><clipPath id="primeTwitter0"><path fill="#fff" d="M0 0h14v14H0z"></path></clipPath></defs></g>',1),it=[at];function rt(i,n){return d(),$("svg",lt,it)}const ct=M(ot,[["render",rt]]),dt={},ut={class:"mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 16 16"},mt=e("path",{fill:"white",d:"M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z"},null,-1),_t=[mt];function pt(i,n){return d(),$("svg",ut,_t)}const ht=M(dt,[["render",pt]]),vt={},ft={class:"mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 24 24"},gt=e("path",{fill:"white","fill-rule":"evenodd",d:"M6.989 4.89a64.248 64.248 0 0 1 10.022 0l2.24.176a2.725 2.725 0 0 1 2.476 2.268c.517 3.09.517 6.243 0 9.332a2.725 2.725 0 0 1-2.475 2.268l-2.24.175a64.24 64.24 0 0 1-10.023 0l-2.24-.175a2.725 2.725 0 0 1-2.476-2.268a28.315 28.315 0 0 1 0-9.332a2.725 2.725 0 0 1 2.475-2.268zM10 14.47V9.53a.3.3 0 0 1 .454-.257l4.117 2.47a.3.3 0 0 1 0 .514l-4.117 2.47A.3.3 0 0 1 10 14.47","clip-rule":"evenodd"},null,-1),wt=[gt];function bt(i,n){return d(),$("svg",ft,wt)}const xt=M(vt,[["render",bt]]);const j=i=>(te("data-v-28756a9a"),i=i(),se(),i),$t={class:"flex-none"},kt={class:"grid text-sm sm:text-base grid-cols-1 md:grid-cols-3 gap-x-[6rem] gap-y-8 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] bg-[#0088CC] text-white py-8"},Ct={class:"block"},yt=j(()=>e("div",{class:"text-xl md:text-2xl font-semibold"},[e("span",null,"Profil")],-1)),Pt={class:"mt-3 leading-6"},Bt={class:"block"},Dt=j(()=>e("div",{class:"text-xl md:text-2xl font-semibold"},[e("span",null,"Sosial Media")],-1)),Mt={class:"text-sm mt-3"},Lt={class:"flex items-center"},Et=["href"],At={class:"block"},zt=j(()=>e("div",{class:"text-xl md:text-2xl font-semibold"},[e("span",null,"Alamat Lengkap")],-1)),It={class:"mt-3"},St={class:"bg-[#0077B3] px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] text-white py-5"},jt={class:"text-base"},Ht={__name:"Footer",async setup(i){let n,r;const o=C([]),f=C([]);return f.value=([n,r]=S(()=>$fetch("/api/social-media")),n=await n,r(),n),o.value=([n,r]=S(()=>$fetch("/api/footer")),n=await n,r(),n),(_,b)=>{const u=Je,c=nt,g=ct,h=ht,w=xt;return d(),$("div",$t,[e("div",kt,[e("div",Ct,[yt,e("div",Pt,[e("span",null,x(P(o).profile),1)])]),e("div",Bt,[Dt,e("div",Mt,[e("ul",null,[(d(!0),$(T,null,ee(P(f),s=>(d(),$("li",Lt,[s.name=="Instagram"?(d(),y(u,{key:0})):D("",!0),s.name=="Facebook"?(d(),y(c,{key:1})):D("",!0),s.name=="Twitter"?(d(),y(g,{key:2})):D("",!0),s.name=="Whatsapp"?(d(),y(h,{key:3})):D("",!0),s.name=="Youtube"?(d(),y(w,{key:4})):D("",!0),e("a",{class:"ml-1 text-white",target:"_blank",href:s.link},x(s.name),9,Et)]))),256))])])]),e("div",At,[zt,e("div",It,[e("span",null,x(P(o).address),1)])])]),e("div",St,[e("p",jt,x(P(o).copyright),1)])])}}},Vt=M(Ht,[["__scopeId","data-v-28756a9a"]]),Ft={class:"min-h-screen flex flex-col bg-[#F8F9FC]"},Tt={class:"min-h-screen"},Wt=ne({__name:"app",setup(i){return oe({titleTemplate:"%s - Desaku"}),(n,r)=>{const o=Re,f=k("router-view"),_=Vt,b=k("v-app"),u=k("v-layout");return d(),y(u,null,{default:m(()=>[a(b,null,{default:m(()=>[e("div",Ft,[a(o),e("div",Tt,[(d(),y(f,{key:n.$route.fullPath}))]),a(_)])]),_:1})]),_:1})}}});export{Wt as default};