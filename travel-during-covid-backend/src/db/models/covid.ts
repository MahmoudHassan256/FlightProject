import mongoose from 'mongoose';

const CovidSchema = new mongoose.Schema({
name:{
    type:String,
    require:true,
},
entry:{
    type:String,
    require:true,
},
testing:{
    type:String,
    require:true,
},
quarantine:{
    type:String,
    require:true,
},
restaurants:{
    type:String,
    require:true,
},
bars:{
    type:String,
    require:true,
},
masks:{
    type:String,
    require:true
},
document:{
    type:[String],
    require:false,
},
},
{ timestamps: false,versionKey:false}
);
const Covid=mongoose.model('Covid',CovidSchema);
export default Covid;