"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLoopbackClientId = void 0;
require("./disposable-polyfill/index.js");
__exportStar(require("@atproto/jwk-webcrypto"), exports);
__exportStar(require("@atproto/oauth-client"), exports);
__exportStar(require("./browser-oauth-client.js"), exports);
__exportStar(require("./errors.js"), exports);
var util_js_1 = require("./util.js");
Object.defineProperty(exports, "buildLoopbackClientId", { enumerable: true, get: function () { return util_js_1.buildLoopbackClientId; } });
//# sourceMappingURL=index.js.map