"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Users_schema_1 = __importDefault(require("../schemas/Users.schema"));
const auth_1 = __importDefault(require("../midddleware/auth"));
const adminAuth_1 = __importDefault(require("../midddleware/adminAuth"));
const router = express_1.default.Router();
const jwtSecret = process.env.ACCESS_TOKEN_SECRET;
router.post("/login", (req, res) => {
    const username = req.body.username;
    const userpassword = req.body.password;
    try {
        Users_schema_1.default.findOne({ username: username })
            .then((user) => {
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            console.log(user);
            bcrypt_1.default.compare(userpassword, user.password).then((isMatch) => {
                console.log(isMatch);
                if (isMatch) {
                    jsonwebtoken_1.default.sign({ id: user.id }, jwtSecret, { expiresIn: 3600 * 365 }, (err, token) => {
                        if (err) {
                            res.status(500).json({ err: err, message: "Server error" });
                        }
                        res.json({
                            success: true,
                            token: "Bearer " + token,
                        });
                    });
                }
                else {
                    return res.status(401).json({ message: "Password incorrect" });
                }
            });
        })
            .catch((err) => {
            console.log(err);
            res.status(500).json({ err: err, message: "Server error" });
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error,
        });
    }
});
router.post("/signup", async (req, res) => {
    const username = req.body.username;
    const userpassword = await bcrypt_1.default.hash(req.body.password, 10);
    const phone = req.body.phone;
    const fullname = req.body.fullname;
    Users_schema_1.default.findOne({ username: username }).then((user) => {
        if (user) {
            return res
                .status(401)
                .json({ message: "User already exists with same username" });
        }
        else {
            const newUser = new Users_schema_1.default({
                username: username,
                password: userpassword,
                phone: phone,
                fullname: fullname,
                isAdmin: false,
            });
            bcrypt_1.default.genSalt(10, (err, salt) => {
                bcrypt_1.default.hash(newUser.password, salt, (err, hash) => {
                    if (err) {
                        res.status(500)({
                            error: err,
                        });
                    }
                    newUser.password = hash;
                    newUser
                        .save()
                        .then((user) => {
                        jsonwebtoken_1.default.sign({ id: user.id }, jwtSecret, { expiresIn: 3600 }, (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token,
                            });
                        });
                    })
                        .catch((err) => {
                        res.status(500).json({
                            err,
                        });
                    });
                });
            });
        }
    });
});
router.get("/user", adminAuth_1.default, async (req, res) => {
    try {
        const users = await Users_schema_1.default.find().select("-password");
        res.send(users);
    }
    catch (err) {
        res.send(err);
    }
});
router.get("/user/:id", auth_1.default, async (req, res) => {
    try {
        const user = await Users_schema_1.default.findById(req.params.id).select("-password");
        res.send(user);
    }
    catch (err) {
        res.send(err);
    }
});
router.put("/user/:id", auth_1.default, async (req, res) => {
    try {
        const userBody = {
            username: req.body.username,
            password: await bcrypt_1.default.hash(req.body.password, 10),
            phone: req.body.phone,
            fullname: req.body.fullname,
            isAdmin: req.body.isAdmin,
        };
        console.log(userBody);
        const user = await Users_schema_1.default.findByIdAndUpdate(req.params.id, userBody, {
            new: true,
            runValidators: true,
        });
        res.send(user);
    }
    catch (err) {
        res.send(err);
    }
});
router.delete("/user/:id", adminAuth_1.default, async (req, res) => {
    try {
        const user = await Users_schema_1.default.findByIdAndDelete(req.params.id);
        res.send(user);
    }
    catch (err) {
        res.send(err);
    }
});
router.post("/addAdmin", adminAuth_1.default, async (req, res) => {
    const username = req.body.username;
    const userpassword = await bcrypt_1.default.hash(req.body.password, 10);
    const rollno = req.body.rollno;
    const phone = req.body.phone;
    const fullname = req.body.fullname;
    Users_schema_1.default.findOne({ username: username }).then((user) => {
        if (user) {
            return res.status(400).json({ username: "User already exists" });
        }
        else {
            const newUser = new Users_schema_1.default({
                username: username,
                password: userpassword,
                rollno: rollno,
                phone: phone,
                fullname: fullname,
                isAdmin: true,
            });
            bcrypt_1.default.genSalt(10, (err, salt) => {
                bcrypt_1.default.hash(newUser.password, salt, (err, hash) => {
                    if (err)
                        throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then((user) => {
                        jsonwebtoken_1.default.sign({ id: user.id }, jwtSecret, { expiresIn: 3600 }, (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token,
                            });
                        });
                    })
                        .catch((err) => console.log(err));
                });
            });
        }
    });
});
exports.default = router;
//# sourceMappingURL=auth.js.map