import {config} from 'dotenv';
config();
export const healthCheck = ()=>{
    return {
        status: 200,
        message: `App is up and running on post ${process.env.PORT}`
    }
}