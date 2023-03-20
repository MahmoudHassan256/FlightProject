"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const users_service_1 = require("../services/users.service");
class UsersController {
    static async getUsers(req, res) {
        const service = new users_service_1.UsersService();
        const Users = await service.getUsers();
        return res.send(Users);
    }
    ;
    static async getUser(req, res) {
        const param = req.body;
        const service = new users_service_1.UsersService();
        const Users = await service.getUser(param);
        return res.send(Users);
    }
    ;
    static async createUser(req, res) {
        const params = req.body;
        const service = new users_service_1.UsersService();
        const User = await service.createUser(params);
        return res.send(User);
    }
    ;
}
exports.UsersController = UsersController;
;
