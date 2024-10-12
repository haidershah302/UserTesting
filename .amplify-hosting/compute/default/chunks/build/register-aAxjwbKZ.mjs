import { _ as __nuxt_component_0 } from './nuxt-link-Lqa5dhw-.mjs';
import { withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../../index.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><form class="p-5"><div class="flex mb-5 gap-2"><div><input type="file" class="file-input file-input-primary w-full max-w-xs shadow-lg shadow-primary/50 h-full"></div><div><label class="input input-bordered flex items-center gap-2 shadow-lg mb-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path></svg><input type="text" class="grow" placeholder="Phone Number" required></label><select class="select select-bordered w-full max-w-xs shadow-lg"><option disabled selected>Gender</option><option>Male</option><option>Female</option><option>Others</option></select></div></div><select class="select select-bordered w-full shadow-lg mb-4"><option disabled selected>Date of Birth</option><option>Male</option><option>Female</option><option>Others</option></select><select class="select select-bordered w-full shadow-lg mb-4"><option disabled selected>Country</option><option>Male</option><option>Female</option><option>Others</option></select><label class="input input-bordered flex items-center gap-2 shadow-lg mb-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path></svg><input type="text" class="grow" placeholder="Signature" required></label>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="btn btn-primary shadow-lg shadow-primary/30 mb-4 block w-full"${_scopeId}>Register</button>`);
      } else {
        return [
          createVNode("button", { class: "btn btn-primary shadow-lg shadow-primary/30 mb-4 block w-full" }, "Register")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/auth/login",
    class: "btn btn-sm btn-secondary shadow-lg shadow-secondary/60"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login`);
      } else {
        return [
          createTextVNode("Login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { register as default };
//# sourceMappingURL=register-aAxjwbKZ.mjs.map
