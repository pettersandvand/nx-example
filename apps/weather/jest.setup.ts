// Expose Node.js native fetch globals into the jsdom global scope.
// jest-environment-jsdom does not automatically forward Node 18+ globals.
// In Jest 30 with Node 22, fetch is available globally but Headers/Request/Response
// need explicit polyfilling. Since node:undici is unavailable via jest's module
// resolver in jsdom env, we assign them from the global fetch object if present,
// otherwise skip (they may already be set by the runtime).

/* eslint-disable @typescript-eslint/no-explicit-any */
const g = global as any;

if (typeof (globalThis as any).fetch !== 'undefined') {
  // Node 22 exposes fetch as a global — Headers/Request/Response come with it
  // but jsdom may shadow them. Re-assign from the Undici internals exposed on
  // the globalThis object by Node.js.
  if (!g.Headers && (globalThis as any).Headers) {
    g.Headers = (globalThis as any).Headers;
  }
  if (!g.Request && (globalThis as any).Request) {
    g.Request = (globalThis as any).Request;
  }
  if (!g.Response && (globalThis as any).Response) {
    g.Response = (globalThis as any).Response;
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
