// Forward Node 18+ built-in fetch globals into the jsdom test environment.
// jest-environment-jsdom does not expose Node's native fetch, but it is
// available on globalThis in Node 18+.  Copying it here means any code path
// that calls fetch (including the generated API client) works without an
// extra npm dependency.
/* eslint-disable @typescript-eslint/no-explicit-any */
if (typeof (globalThis as any).fetch === 'function') {
  (global as any).fetch = (globalThis as any).fetch;
  (global as any).Headers = (globalThis as any).Headers;
  (global as any).Request = (globalThis as any).Request;
  (global as any).Response = (globalThis as any).Response;
}
