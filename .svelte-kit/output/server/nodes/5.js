

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/admin/+page.js";
export const imports = ["_app/immutable/nodes/5.DR5xumKa.js","_app/immutable/chunks/BS0gRwNc.js","_app/immutable/chunks/BZmhVH3C.js","_app/immutable/chunks/k44R_x1r.js","_app/immutable/chunks/bK2u74g-.js","_app/immutable/chunks/9c_cvenr.js","_app/immutable/chunks/CRyH54k2.js","_app/immutable/chunks/BAw6DJ4W.js","_app/immutable/chunks/Bk7CszM2.js","_app/immutable/chunks/DPw89ygF.js","_app/immutable/chunks/BoFmefWf.js","_app/immutable/chunks/potk6kCW.js","_app/immutable/chunks/Deg-8uAz.js","_app/immutable/chunks/CDSFBteA.js","_app/immutable/chunks/DNNKLuTY.js","_app/immutable/chunks/Dl5hRVwq.js"];
export const stylesheets = [];
export const fonts = [];
