import { e as escape_html, b as attr_class, c as stringify } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let users = [];
    let bookings = [];
    let messages = [];
    let subscriptions = [];
    let adminEmail = "";
    $$renderer2.push(`<div class="container mt-5 mb-5"><div class="card shadow border-0 overflow-hidden"><div class="card-header p-4" style="background:#2c2c2c;color:white;"><div class="d-flex justify-content-between align-items-center"><h2 class="mb-0 fw-bold">Admin Dashboard</h2> <span class="badge bg-danger rounded-pill">Admin: ${escape_html(adminEmail)}</span></div> <div class="mt-4 d-flex gap-2"><button${attr_class(`btn btn-sm ${stringify("btn-light")}`)}>Users (${escape_html(users.length)})</button> <button${attr_class(`btn btn-sm ${stringify("btn-outline-light")}`)}>Bookings (${escape_html(bookings.length)})</button> <button${attr_class(`btn btn-sm ${stringify("btn-outline-light")}`)}>Messages (${escape_html(messages.length)})</button> <button${attr_class(`btn btn-sm ${stringify("btn-outline-light")}`)}>Subscriptions (${escape_html(subscriptions.length)})</button></div></div> <div class="card-body bg-white p-4">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-center p-5"><div class="spinner-border text-dark"></div> <p class="mt-3">Loading dashboard data...</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
  });
}
export {
  _page as default
};
