"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDal = void 0;
const users_1 = __importDefault(require("../db/models/users"));
class UsersDal {
    async createUser(User) {
        User = new users_1.default({
            role: "user",
            fullname: User.fullname,
            email: User.email,
            password: User.password,
        });
        const checkUser = await users_1.default.findOne({ email: User.email });
        if (checkUser)
            return { msg: "already exist" };
        else {
            return await users_1.default.create(User);
        }
    }
    async updateUser(User) {
        await users_1.default.findOne({
            name: User.name,
        }).updateOne({ $set: { chef: User.chef, } });
        const updatedUsers = await users_1.default.find();
        return updatedUsers;
    }
    async getUser(User) {
        const checkUser = await users_1.default.findOne({
            email: User.email,
            password: User.password,
        }).find();
        if (checkUser.length === 0)
            return { msg: "not found" };
        else {
            return checkUser;
        }
        ;
    }
    findAll() {
        return users_1.default.find({ role: "user" });
    }
}
exports.UsersDal = UsersDal;
