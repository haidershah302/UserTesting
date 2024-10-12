import { _ as __nuxt_component_0 } from './nuxt-link-Lqa5dhw-.mjs';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../../index.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = publicAssetsURL("/assets/room/family.png");
const _imports_1 = publicAssetsURL("/assets/room/rings.png");
const _imports_2 = publicAssetsURL("/assets/room/crystal.png");
const _imports_3 = publicAssetsURL("/assets/room/icons/games.png");
const _imports_4 = publicAssetsURL("/assets/room/icons/gifts.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const authUser = {
      id: 1,
      name: "User Name",
      profile_picture: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      room: {
        id: "123456",
        name: "Haseeb Room",
        total_gift_interactions: 1123,
        active_users: 3211,
        allowed_seats: 15,
        theme: {
          background_image: "assets/room/backgrounds/6.jpg",
          frame: {
            src: "assets/room/frames/4.png",
            bdr_box: "20px",
            size: "75px"
          },
          profile_picture: "assets/room/seat.png",
          color: "#5EE635FF",
          textColor: "#ffffff"
        },
        members: [
          {
            id: 1,
            name: "User Name",
            profile_picture: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            room: {
              room_id: "123456"
            },
            frame: {
              src: "assets/siteAssets/room/frames/6.png",
              bdr_box: 15,
              size: "90px"
            },
            interaction: {
              likes: 4,
              gifts_received: 8
            }
          },
          {
            id: 2,
            name: "User Name",
            profile_picture: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            room: {
              room_id: "123456"
            },
            frame: {
              src: "assets/siteAssets/room/frames/4.png",
              bdr_box: 15,
              size: "90px"
            }
          }
        ]
      },
      frame: {
        src: "assets/room/frames/7.png",
        bdr_box: 5,
        size: "60px"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _cssVars = { style: {
        "--36b47361": authUser.room.theme.color,
        "--614a4334": authUser.room.theme.textColor,
        "--6260d6a4": authUser.room.theme.frame.size,
        "--5224580e": authUser.room.theme.frame.bdr_box
      } };
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, _cssVars))} data-v-d7da6ee5><div class="w-full h-screen bg-base-content relative room" data-v-d7da6ee5><img class="absolute top-0 lef-0 z-0 h-full w-full"${ssrRenderAttr("src", authUser.room.theme.background_image)} alt="image" data-v-d7da6ee5><div class="relative" data-v-d7da6ee5><div class="grid grid-cols-12 gap-2 p-4" data-v-d7da6ee5><div class="room_head_block theme-from bg-gradient-to-tl shadow-xl theme-shadow" data-v-d7da6ee5><div class="col-span-4 text-center pt-1" data-v-d7da6ee5>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-full min-h-16" data-v-d7da6ee5${_scopeId}><div class="room-avatar absolute_center" data-v-d7da6ee5${_scopeId}><img class="room_frame absolute_center"${ssrRenderAttr("src", authUser.frame.src)} alt="" data-v-d7da6ee5${_scopeId}><img class="room_seat"${ssrRenderAttr("src", authUser.profile_picture)} alt="" data-v-d7da6ee5${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative w-full min-h-16" }, [
                createVNode("div", { class: "room-avatar absolute_center" }, [
                  createVNode("img", {
                    class: "room_frame absolute_center",
                    src: authUser.frame.src,
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode("img", {
                    class: "room_seat",
                    src: authUser.profile_picture,
                    alt: ""
                  }, null, 8, ["src"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-xs font-bold" data-v-d7da6ee5>${ssrInterpolate(authUser.name)}</p></div><div class="col-span-6 pt-3" data-v-d7da6ee5><h1 data-v-d7da6ee5>${ssrInterpolate(authUser.room.name)}</h1><div class="flex" data-v-d7da6ee5><p data-v-d7da6ee5>ID: ${ssrInterpolate(authUser.room.id)}</p></div></div><div class="col-span-2" data-v-d7da6ee5><svg xmlns="http://www.w3.org/2000/svg" class="w-full mt-4 text-[--theme-text-color] drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d7da6ee5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-d7da6ee5></path></svg></div></div><div class="text-center pt-4 col-span-2" data-v-d7da6ee5><button class="btn btn-circle border-4 border-success btn-outline btn-success shadow-lg shadow-success/50" data-v-d7da6ee5><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6" data-v-d7da6ee5><path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" data-v-d7da6ee5></path></svg></button></div><div class="col-span-2 text-center pt-4" data-v-d7da6ee5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn btn-circle border-4 border-primary btn-outline btn-primary shadow-lg shadow-primary/50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d7da6ee5${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 18L18 6M6 6l12 12" data-v-d7da6ee5${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "4",
                  d: "M6 18L18 6M6 6l12 12"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex justify-between px-4" data-v-d7da6ee5><button class="btn btn-sm p-0 gap-1 btn-ghost text-accent" data-v-d7da6ee5><svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-v-d7da6ee5><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" data-v-d7da6ee5></path></svg><span class="text-base-100 font-bold" data-v-d7da6ee5>11.3 M</span></button><button class="btn btn-sm p-0 gap-1 btn-ghost text-accent" data-v-d7da6ee5><svg fill="none" stroke="currentColor" stroke-width="1.5" class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-d7da6ee5><path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" data-v-d7da6ee5></path></svg><span class="text-base-100 font-bold" data-v-d7da6ee5>3211</span></button></div><div class="grid grid-cols-5 gap-2 gap-y-6 p-2" data-v-d7da6ee5><!--[-->`);
      ssrRenderList(authUser.room.allowed_seats, (n) => {
        _push(`<div class="col-auto flex flex-col" data-v-d7da6ee5><div class="relative w-full min-h-16" data-v-d7da6ee5><div class="room-avatar absolute_center" data-v-d7da6ee5><img class="room_frame absolute_center"${ssrRenderAttr("src", authUser.room.theme.frame.src)} alt="" data-v-d7da6ee5><img class="room_seat"${ssrRenderAttr("src", authUser.room.theme.profile_picture)} alt="" data-v-d7da6ee5></div></div><p style="${ssrRenderStyle({ display: "none" })}" class="text-center text-base-100 font-bold text-sm" data-v-d7da6ee5>1</p><button style="${ssrRenderStyle({ display: "none" })}" class="btn btn-xs gap-0 text-xs mx-auto btn-ghost text-primary" data-v-d7da6ee5><svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d7da6ee5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-d7da6ee5></path></svg> 4 </button></div>`);
      });
      _push(`<!--]--></div><div class="p-2" data-v-d7da6ee5><p class="rounded-box p-2 font-bold text-base-100 text-xs max-w-80 bg-gradient-to-tr theme-from shadow-xl theme-shadow" data-v-d7da6ee5> Welcome to FLY LIVE. Any bad information in chat will be blocked. Please respect each other and country and religions and chat in a decent manners. </p></div><div class="grid grid-cols-12 h-[23rem] gap-2 gap-y-4 px-2" data-v-d7da6ee5><div class="col-span-10 rounded-b-box bg-gradient-to-tl theme-from shadow-2xl theme-shadow" data-v-d7da6ee5></div><div class="col-span-2 flex flex-col justify-end gap-4" data-v-d7da6ee5><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-d7da6ee5><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-d7da6ee5><div data-v-d7da6ee5><img${ssrRenderAttr("src", _imports_2)} class="w-full" alt="" data-v-d7da6ee5><div class="px-2" data-v-d7da6ee5><progress class="progress shadow-md theme-shadow" value="60" max="100" data-v-d7da6ee5></progress></div></div></div><div class="col-span-12 text-[--theme-text-color] grid grid-cols-6" data-v-d7da6ee5><button class="btn p-0 btn-ghost" data-v-d7da6ee5><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 shadow-icons" data-v-d7da6ee5><path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clip-rule="evenodd" data-v-d7da6ee5></path></svg></button><button class="btn p-0 btn-ghost" data-v-d7da6ee5><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 shadow-icons" data-v-d7da6ee5><path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" data-v-d7da6ee5></path></svg></button><button class="btn p-0 btn-ghost" data-v-d7da6ee5><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12 shadow-icons" data-v-d7da6ee5><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" data-v-d7da6ee5></path></svg></button><button class="btn p-0 btn-ghost" data-v-d7da6ee5><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 shadow-icons" data-v-d7da6ee5><path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" data-v-d7da6ee5></path><path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" data-v-d7da6ee5></path></svg></button><button class="btn p-0 btn-ghost shadow-icons" data-v-d7da6ee5><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-d7da6ee5></button><button class="btn p-0 btn-ghost shadow-icons" data-v-d7da6ee5><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-d7da6ee5></button></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/room/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d7da6ee5"]]);

export { index as default };
//# sourceMappingURL=index-BwL3jF2S.mjs.map
