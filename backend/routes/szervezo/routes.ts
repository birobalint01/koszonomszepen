import express, { Router, Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

module.exports = () => {

    const router: Router = express.Router();

    const prisma: PrismaClient = new PrismaClient()

    router.get('/', (req: Request, res: Response) => {

        prisma.szervezo.findMany().then((data:any) => {

            res.json(data);

        });

    });

    router.post('/create', async (req: Request, res: Response) => {
       
        

        const szervezo = await prisma.szervezo.create({
            data: {

                id:parseInt(req.body.id),

                nev: req.body.nev,

                email: req.body.email,

                telefonszam: parseInt(req.body.telefonszam)

                
            }
        });

        res.status(201).json(szervezo);
    })

    return router;
}