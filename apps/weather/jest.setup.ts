// Expose Node.js native fetch globals into the jsdom global scope.
// jest-environment-jsdom does not automatically forward Node 18+ globals.
// In Node 18+, fetch/Headers/Request/Response are available on globalThis.
// We must not use `node:undici` directly as Jest's module resolver does not support the `node:` prefix.

/* eslint-disable @typescript-eslint/no-explicit-any */
const g = global as any;
if (typeof g.fetch === 'undefined') {
  g.fetch = (globalThis as any).fetch;
}
if (typeof g.Headers === 'undefined') {
  g.Headers = (globalThis as any).Headers;
}
if (typeof g.Request === 'undefined') {
  g.Request = (globalThis as any).Request;
}
if (typeof g.Response === 'undefined') {
  g.Response = (globalThis as any).Response;
}
