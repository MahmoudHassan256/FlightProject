import { Request, Response } from "express";
import { UsersService } from "../services/users.service";

export class UsersController {

    public static async getUsers(req: Request, res: Response) {
        const service = new UsersService();
        const Users = await service.getUsers();
        return res.send(Users);
    };
    public static async getUser(req: Request, res: Response) {
        const param=req.body;
        const service = new UsersService();
        const Users = await service.getUser(param);
        return res.send(Users);
    };
    public static async createUser(req: Request, res: Response) {
        const params = req.body;
        const service = new UsersService();
        const User = await service.createUser(params);
        return res.send(User);
    };
};

