import { Request, Response, NextFunction, Router } from "express";
import { healthCheck } from "./general.controller";
const generalRoute: Router = Router();

generalRoute.get(
  "/health",
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const health = healthCheck();
      res.status(200).json(health);
    } catch (error) {
      next(error);
    }
  }
);

export default generalRoute;
