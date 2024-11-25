"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserRuntimeImplementation = void 0;
const jwk_webcrypto_1 = require("@atproto/jwk-webcrypto");
/**
 * @see {@link // https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request}
 */
const nativeRequestLock = navigator.locks?.request
    ? (name, fn) => navigator.locks.request(name, { mode: 'exclusive' }, async () => fn())
    : undefined;
class BrowserRuntimeImplementation {
    constructor() {
        Object.defineProperty(this, "requestLock", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: nativeRequestLock
        });
        if (typeof crypto !== 'object' || !crypto?.subtle) {
            throw new Error('Crypto with CryptoSubtle is required. If running in a browser, make sure the current page is loaded over HTTPS.');
        }
        if (!this.requestLock) {
            // There is no real need to polyfill this on older browsers. Indeed, the
            // oauth-client library will try and recover from concurrency issues when
            // refreshing tokens.
            console.warn('Locks API not available. You should consider using a more recent browser.');
        }
    }
    async createKey(algs) {
        return jwk_webcrypto_1.WebcryptoKey.generate(algs, crypto.randomUUID(), {
            extractable: true,
        });
    }
    getRandomValues(byteLength) {
        return crypto.getRandomValues(new Uint8Array(byteLength));
    }
    async digest(data, { name }) {
        switch (name) {
            case 'sha256':
            case 'sha384':
            case 'sha512': {
                const buf = await crypto.subtle.digest(`SHA-${name.slice(3)}`, data);
                return new Uint8Array(buf);
            }
            default:
                throw new Error(`Unsupported digest algorithm: ${name}`);
        }
    }
}
exports.BrowserRuntimeImplementation = BrowserRuntimeImplementation;
//# sourceMappingURL=browser-runtime-implementation.js.map