

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/profile/+page.js";
export const imports = ["_app/immutable/nodes/9.Ba0KnQOd.js","_app/immutable/chunks/ccil3FFO.js","_app/immutable/chunks/D_pUkfcj.js","_app/immutable/chunks/CzTAYrsp.js","_app/immutable/chunks/Bt7u3dhx.js","_app/immutable/chunks/CccKqVwQ.js","_app/immutable/chunks/D259pRMx.js","_app/immutable/chunks/Yc7uqtvg.js","_app/immutable/chunks/B6_9ZnJL.js","_app/immutable/chunks/CzXad7lk.js","_app/immutable/chunks/CXagKooe.js","_app/immutable/chunks/BqCLhDMz.js"];
export const stylesheets = [];
export const fonts = [];
