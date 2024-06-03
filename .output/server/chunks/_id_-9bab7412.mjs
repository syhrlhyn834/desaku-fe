import { H as Head, T as Title } from './components-b178fbaf.mjs';
import { _ as __nuxt_component_0 } from './BreadCrumb-6154852b.mjs';
import { _ as __nuxt_component_2 } from './Author-7a8e9d16.mjs';
import { _ as __nuxt_component_0$1 } from './Date-c0091c75.mjs';
import { _ as __nuxt_component_1 } from './Tag-1fb4515b.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './LatestNews-3e9543a0.mjs';
import { ref, withAsyncContext, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { b as useRouter$1, c as createError, n as navigateTo } from './server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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
    const post = ref(null);
    const route = useRouter$1().currentRoute.value;
    post.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/berita/slug/" + route.params.id)), __temp = await __temp, __restore(), __temp);
    if (!post.value.title) {
      throw createError({
        statusCode: 404,
        statusMessage: "Page Not Found"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_IconsAuthor = __nuxt_component_2;
      const _component_IconsDate = __nuxt_component_0$1;
      const _component_IconsTag = __nuxt_component_1;
      const _component_PartialsNewsCategory = __nuxt_component_3;
      const _component_PartialsLatestNews = __nuxt_component_4;
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
      _push(`<div class="animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6">`);
      _push(ssrRenderComponent(_component_BreadCrumb, {
        child: unref(post).title
      }, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Berita</span>`);
          } else {
            return [
              createVNode("span", {
                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/berita")
              }, "Berita", 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([_ctx.$vuetify.display.mobile ? "pb-12" : "pb-4", "grid grid-cols-1 md:grid-cols-6 gap-y-8 md:gap-x-12"])}"><div class="block col-span-1 md:col-span-4"><div class="text-[#0088CC] text-2xl mb-2 md:text-2xl font-semibold py-3"><span>${ssrInterpolate(unref(post).title)}</span></div><div class="text-md flex items-center font-medium mt-2 mb-1">`);
      _push(ssrRenderComponent(_component_IconsAuthor, null, null, _parent));
      _push(`<div class="ml-2"><span class="font-normal">Ditulis oleh</span><span class="ml-1 font-normal">${ssrInterpolate(unref(post).created_by)}</span></div></div><div class="text-md flex items-center font-normal my-4"><div class="flex">`);
      _push(ssrRenderComponent(_component_IconsDate, null, null, _parent));
      _push(`<span class="ml-1">${ssrInterpolate(unref(moment)(unref(post).created_at).format("LL"))}</span></div><div class="flex ml-2 items-center">`);
      _push(ssrRenderComponent(_component_IconsTag, null, null, _parent));
      _push(`<span class="ml-1">${ssrInterpolate(unref(post).category_name)}</span></div></div><div class="w-full font-normal quill-content">${unref(post).content}</div></div><div class="col-span-2">`);
      _push(ssrRenderComponent(_component_PartialsNewsCategory, null, null, _parent));
      _push(ssrRenderComponent(_component_PartialsLatestNews, null, null, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Berita/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-9bab7412.mjs.map
