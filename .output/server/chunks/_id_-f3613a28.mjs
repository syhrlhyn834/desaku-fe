import { H as Head, T as Title } from './components-b178fbaf.mjs';
import { _ as __nuxt_component_0 } from './BreadCrumb-6154852b.mjs';
import { _ as __nuxt_component_0$1 } from './Date-c0091c75.mjs';
import { _ as __nuxt_component_2 } from './Author-7a8e9d16.mjs';
import { _ as __nuxt_component_3 } from './LatestAnnouncement-ad18a274.mjs';
import { reactive, withAsyncContext, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { b as useRouter$1, n as navigateTo } from './server.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import moment from 'moment';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import '@vueuse/integrations/useJwt';
import 'cookie-es';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRouter$1().currentRoute.value;
    const post = reactive({
      title: null,
      content: null,
      created_at: null,
      created_by: null
    });
    const data = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/pengumuman/slug/" + route.params.id)), __temp = await __temp, __restore(), __temp);
    post.title = data.title;
    post.content = data.content;
    post.created_at = data.created_at;
    post.created_by = data.name;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_IconsDate = __nuxt_component_0$1;
      const _component_IconsAuthor = __nuxt_component_2;
      const _component_PartialsLatestAnnouncement = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(post).title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(post).title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(post).title), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="animate-fade block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6">`);
      _push(ssrRenderComponent(_component_BreadCrumb, {
        child: unref(post).title
      }, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Pengumuman</span>`);
          } else {
            return [
              createVNode("span", {
                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/pengumuman")
              }, "Pengumuman", 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pb-12 grid grid-cols-1 md:grid-cols-6 md:gap-x-12 gap-y-8"><div class="block col-span-1 md:col-span-4"><div class="text-[#0088CC] mb-2 text-xl md:text-2xl font-semibold py-3"><span>${ssrInterpolate(unref(post).title)}</span></div><div class="text-sm md:text-base block sm:flex items-center font-normal mt-2 mb-4"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_IconsDate, { class: "flex-none" }, null, _parent));
      _push(`<span class="ml-1">${ssrInterpolate(unref(moment)(unref(post).created_at).format("LL"))}</span></div><div class="flex items-center sm:ml-2">`);
      _push(ssrRenderComponent(_component_IconsAuthor, { class: "flex-none" }, null, _parent));
      _push(`<span class="ml-1">Ditulis oleh ${ssrInterpolate(unref(post).created_by)}</span></div></div><div class="quill-content">${(_a = unref(post).content) != null ? _a : ""}</div></div><div class="col-span-2">`);
      _push(ssrRenderComponent(_component_PartialsLatestAnnouncement, null, null, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Pengumuman/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-f3613a28.mjs.map
