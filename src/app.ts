import express,{Application} from 'express';
import cors from 'cors';
import apiRoute from './routes';
import ErrorHandlerMiddleware from './middleware/error.middleware';
import {config} from 'dotenv';
import logger from './logger';
config();
const PORT = process.env.PORT||8080;
const server:Application = express();
server.use(cors());
server.use(express.json());
server.use('/api',apiRoute);
server.use(ErrorHandlerMiddleware);
server.listen(PORT,()=>{
    logger.info(`App is up and running in port : ${PORT}`);
});