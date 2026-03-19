

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/profile/+page.js";
export const imports = ["_app/immutable/nodes/9.Djrjvdzl.js","_app/immutable/chunks/D4PJU2ax.js","_app/immutable/chunks/BvQOPF3e.js","_app/immutable/chunks/BlnVf9Pj.js","_app/immutable/chunks/oLqUhi2w.js","_app/immutable/chunks/CN15GLdX.js","_app/immutable/chunks/CxBLIIqO.js","_app/immutable/chunks/-BklmyhJ.js","_app/immutable/chunks/Bh7buDDo.js","_app/immutable/chunks/DFSP7SXs.js","_app/immutable/chunks/BCwjc31M.js","_app/immutable/chunks/BrhCQfqe.js"];
export const stylesheets = [];
export const fonts = [];
