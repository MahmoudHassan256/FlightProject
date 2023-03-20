import Covid from "../db/models/covid";
export class CovidDal{

   public findAll() {
      return Covid.find();
    }
   public findCovid(To:any){
    return Covid.find({name:To.to});
   } 
}