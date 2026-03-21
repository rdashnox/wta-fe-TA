

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DCmCaa8Z.js","_app/immutable/chunks/BS0gRwNc.js","_app/immutable/chunks/BZmhVH3C.js","_app/immutable/chunks/k44R_x1r.js"];
export const stylesheets = ["_app/immutable/assets/2.Dp2INSpy.css"];
export const fonts = [];
