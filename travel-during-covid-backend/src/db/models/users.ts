import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema(
    {
      role: {
        type: String,
        required: false
      },
      fullname:{
        type:String,
        require:true
      },
      email:{
        type:String,
        require:true,
        unique:true,
      },
      password:{
        type:String,
        require:true,
      }
    },
    { timestamps: false,versionKey:false}
  );
  
const Users = mongoose.model('Users', UsersSchema);
  
export default Users;

