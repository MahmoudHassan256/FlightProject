import { UsersDal } from "../dal/users.dal";

export class UsersService {

    public async getUsers() {
        const dal = new UsersDal();
        const res = await dal.findAll();
        return res;
    };

    public async createUser(User:any) {
        const dal = new UsersDal();
        const res = dal.createUser(User);
        return res;
    };

    public async getUser(Email:any) {
        const dal = new UsersDal();
        const res = await dal.getUser(Email);
        return res;
    };
};



