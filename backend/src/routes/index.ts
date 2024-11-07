import { Router, Request, Response } from "express";
import { deviceRoutes } from "./devices.routes";

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    active: true,
    message: "Server is Running",
    version: "1.0.0"
  });
});

routes.use(deviceRoutes);

export { routes };