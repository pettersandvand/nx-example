// Expose Node.js native fetch globals into the jsdom global scope.
// jest-environment-jsdom does not automatically forward Node 18+ globals.
// In Jest 30 / Node 22, fetch is on globalThis but not on the jsdom `global`.

/* eslint-disable @typescript-eslint/no-explicit-any */
const g = global as any;
const gt = globalThis as any;

if (!g.fetch && gt.fetch) {
  g.fetch = gt.fetch;
}
if (!g.Headers && gt.Headers) {
  g.Headers = gt.Headers;
}
if (!g.Request && gt.Request) {
  g.Request = gt.Request;
}
if (!g.Response && gt.Response) {
  g.Response = gt.Response;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
