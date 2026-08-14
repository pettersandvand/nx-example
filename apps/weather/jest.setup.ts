// Expose Node.js native fetch into the jsdom global scope.
// jest-environment-jsdom does not automatically forward Node 18+ globals.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).fetch = fetch;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).Headers = Headers;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).Request = Request;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).Response = Response;
