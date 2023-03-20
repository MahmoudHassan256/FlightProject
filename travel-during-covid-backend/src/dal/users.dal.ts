import Users from "../db/models/users";

export class UsersDal {

  public async createUser(User: any) {
    User = new Users({
      role:"user",
      fullname:User.fullname,
      email:User.email,
      password:User.password,
    });
      const checkUser=await Users.findOne({email:User.email});
      if(checkUser) return {msg:"already exist"};
      else{return await Users.create(User);  }
  }

  public async updateUser(User: any) {
    await Users.findOne({
      name: User.name,
    }).updateOne({ $set: { chef: User.chef, } });
    const updatedUsers = await Users.find();
    return updatedUsers;
  }
  public async getUser(User:any){
    const checkUser= await Users.findOne({
      email: User.email,
      password:User.password,
    }).find();
    if(checkUser.length===0) return {msg:"not found"};
    else {return checkUser};
     
  }
  public findAll() {
    return Users.find({role:"user"});
  }
}


