import { s as store_get, h as head, u as unsubscribe_stores } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
import { u as user } from "../../../chunks/auth.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    store_get($$store_subs ??= {}, "$user", user)?.role === "admin";
    head("maq4gq", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<meta name="robots" content="noindex, nofollow"/>`);
    });
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<p class="text-center py-5">Redirecting...</p>`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
