// Expose Node.js native fetch globals into the jsdom global scope.
// jest-environment-jsdom does not automatically forward Node 18+ globals.
// In Jest 30 / Node 22, fetch is on globalThis but not on the jsdom `global`.

/* eslint-disable @typescript-eslint/no-explicit-any */
const g = global as any;

// Try undici (the fetch implementation Node ships with) first.
// The node: prefix is not resolvable by babel-jest, so require the package name directly.
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const undici = require('undici');
  if (!g.fetch) g.fetch = undici.fetch;
  if (!g.Headers) g.Headers = undici.Headers;
  if (!g.Request) g.Request = undici.Request;
  if (!g.Response) g.Response = undici.Response;
} catch {
  // Fall back to globalThis for environments where undici isn't available separately
  const gt = globalThis as any;
  if (!g.fetch && gt.fetch) g.fetch = gt.fetch;
  if (!g.Headers && gt.Headers) g.Headers = gt.Headers;
  if (!g.Request && gt.Request) g.Request = gt.Request;
  if (!g.Response && gt.Response) g.Response = gt.Response;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
