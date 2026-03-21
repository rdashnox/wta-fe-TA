

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.B0SpNb1R.js","_app/immutable/chunks/BS0gRwNc.js","_app/immutable/chunks/BZmhVH3C.js","_app/immutable/chunks/k44R_x1r.js"];
export const stylesheets = [];
export const fonts = [];
