// Expose Node.js native fetch globals into the jsdom global scope.
// jest-environment-jsdom does not automatically forward Node 18+ globals.
// `fetch` is available as a global in Jest 30 / Node 22, but Headers/Request/Response
// need to be polyfilled from the built-in undici module (node:undici, Node 18+).

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const undici = require('node:undici') as any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const g = global as any;
g.Headers = g.Headers ?? undici.Headers;
g.Request = g.Request ?? undici.Request;
g.Response = g.Response ?? undici.Response;
