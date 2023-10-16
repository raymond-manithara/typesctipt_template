import {Router} from 'express'
import generalRoute from './areas/general/general.route';
const apiRoute:Router = Router();
apiRoute.use('/general',generalRoute);

export default apiRoute;