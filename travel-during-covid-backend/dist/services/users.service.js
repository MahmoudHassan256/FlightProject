"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const users_dal_1 = require("../dal/users.dal");
class UsersService {
    async getUsers() {
        const dal = new users_dal_1.UsersDal();
        const res = await dal.findAll();
        return res;
    }
    ;
    async createUser(User) {
        const dal = new users_dal_1.UsersDal();
        const res = dal.createUser(User);
        return res;
    }
    ;
    async getUser(Email) {
        const dal = new users_dal_1.UsersDal();
        const res = await dal.getUser(Email);
        return res;
    }
    ;
}
exports.UsersService = UsersService;
;
