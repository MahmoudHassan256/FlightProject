import {CovidDal} from '../dal/covid.dal';

export class CovidService{
    public async getAll() {
        const dal = new CovidDal();
        const res = await dal.findAll();
        return res;
    }
    public async getCovid(To:any) {
        const dal = new CovidDal();
        const res = await dal.findCovid(To);
        return res;
    };
};