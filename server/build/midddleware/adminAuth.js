"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Users_schema_1 = __importDefault(require("../schemas/Users.schema"));
const jwtSecret = process.env.ACCESS_TOKEN_SECRET;
async function default_1(req, res, next) {
    const authHeader = req.headers["authorization"];
    const TOKEN = authHeader && authHeader.split(" ")[1];
    if (!TOKEN) {
        return res.status(401).json({
            msg: "No token, authorization denied",
        });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(TOKEN, jwtSecret);
        console.log(decoded);
        const admin = await Users_schema_1.default.findOne({
            _id: decoded.id,
        });
        if (admin.isAdmin === false)
            return res.status(403).json({
                msg: "Not authorized to access this functionality",
            });
        next();
    }
    catch (err) {
        console.log(err);
        res.status(401).json({
            err: err,
            msg: "Token is not valid",
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=adminAuth.js.map