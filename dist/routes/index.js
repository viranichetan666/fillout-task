"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formRoutes_1 = __importDefault(require("./formRoutes"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Server is running");
});
router.use('/v1/api/forms/', formRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map