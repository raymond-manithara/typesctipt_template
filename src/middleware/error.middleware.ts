import {Request,Response,NextFunction, RequestHandler} from 'express';

const ErrorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    const splitUp: string[] = err.message.split("@;@;");
    const code: number = parseInt(splitUp[1] || '500');
    const message: string = splitUp[0];
    if (err) {
       return res.status(code).json({
            code: code,
            message,
        });
    }
 next();
};
export default ErrorHandlerMiddleware;
