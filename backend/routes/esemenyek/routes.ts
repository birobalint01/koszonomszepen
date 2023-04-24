import express, { Router, Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

module.exports = () => {
    
    const router: Router = express.Router();
    
    const prisma: PrismaClient = new PrismaClient()

    router.get('/', (req: Request, res: Response) => {
    
        prisma.esemenyek.findMany().then((data:any) => {
    
            res.json(data);
    
        });
    
    });
    
    router.post('/create', async (req: Request, res: Response) => {
       
        const events = await prisma.esemenyek.create({
        
            data: {
        
                id:parseInt(req.body.id),
       
                nev: req.body.nev,
       
                datum: new Date(req.body.datum),
       
                leiras:req.body.leiras,
       
                idopont:parseInt(req.body.idopont),
       
                helyszin_azonosito:parseInt(req.body.helyszin_azonosito),
       
                szervezo_azonosito:parseInt(req.body.szervezo_azonosito) 
            }
        
        });

        res.status(201).json(events);
    
    })

    return router;
}