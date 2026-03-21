import { s as store_get, h as head, u as unsubscribe_stores } from "../../../chunks/index2.js";
import { g as goto } from "../../../chunks/client.js";
import { u as user } from "../../../chunks/auth.js";
import "../../../chunks/validationSchemas.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    if (store_get($$store_subs ??= {}, "$user", user) === null) {
      goto();
    }
    head("1hhmmmu", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<meta name="robots" content="noindex, nofollow"/>`);
    });
    $$renderer2.push(`<div class="container py-5"><h2 class="mb-4">My Bookings</h2> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="d-flex justify-content-center align-items-center"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div> <p class="ms-2">Loading your bookings...</p></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
