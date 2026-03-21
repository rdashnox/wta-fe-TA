

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/admin/+page.js";
export const imports = ["_app/immutable/nodes/5.D_TCaFjW.js","_app/immutable/chunks/DcbeN8eZ.js","_app/immutable/chunks/_-MoZFLV.js","_app/immutable/chunks/CbYAu99_.js","_app/immutable/chunks/DVbH_6rU.js","_app/immutable/chunks/hbMTq8RH.js","_app/immutable/chunks/DDE_a7pd.js","_app/immutable/chunks/BeCJjKjC.js","_app/immutable/chunks/Ce-Kghpb.js","_app/immutable/chunks/BtsSZRfA.js","_app/immutable/chunks/BUdpjeE1.js","_app/immutable/chunks/Bt_a3e2Z.js","_app/immutable/chunks/Dzhn998B.js","_app/immutable/chunks/CWT3di6J.js","_app/immutable/chunks/sumQx2B4.js","_app/immutable/chunks/cNusKf76.js"];
export const stylesheets = [];
export const fonts = [];
