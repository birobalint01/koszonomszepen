import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';


dotenv.config();

const PORT = process.env.PORT;

const app: Express = express();

app.use(function (req, res, next) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  
    next();
  });

  app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', require("./routes/router"));

const server = app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}...`);

});

app.set('server', server);