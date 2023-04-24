import express, { Router, Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

module.exports = () => {

    const router: Router = express.Router();

    const prisma: PrismaClient = new PrismaClient()


    
    router.get('/', (req: Request, res: Response) => {
    
        prisma.helyszin.findMany().then((data:any) => {
    
            res.json(data);
    
        });
    
    });
    
    router.post('/create', async (req: Request, res: Response) => {
    
        
        


        const helyszin = await prisma.helyszin.create({
            data: {
                
                nev: req.body.nev,
        
                longitude:parseFloat(req.body.longitude),
        
                latitude: parseFloat(req.body.latitude)
               
            }
        });

        res.status(201).json(helyszin);
    })
    return router;
}