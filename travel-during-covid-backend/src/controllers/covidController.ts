import { Request, Response } from "express";
import { CovidService } from "../services/covid.service";

export class CovidController{
    public static async getAll(req: Request, res: Response) {
        const service = new CovidService();
        const Covid = await service.getAll();
        return res.send(Covid);
    }
    public static async getCovid(req: Request, res: Response) {
        const params = req.body;
        const service = new CovidService();
        const Covid = await service.getCovid(params);
        return res.send(Covid);
    };
};