"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecret = process.env.ACCESS_TOKEN_SECRET;
function default_1(req, res, next) {
    const authHeader = req.headers["authorization"];
    const TOKEN = authHeader && authHeader.split(" ")[1];
    if (!TOKEN) {
        return res.status(401).json({
            msg: "No token, authorization denied",
        });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(TOKEN, jwtSecret);
        req.user = decoded.user;
        next();
    }
    catch (err) {
        res.status(401).json({
            msg: "Token is not valid",
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=auth.js.map