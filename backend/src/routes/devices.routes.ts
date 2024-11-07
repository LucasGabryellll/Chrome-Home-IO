import { Router } from "express";
import { getDevices } from "../controller/DeviceController";

const deviceRoutes = Router();

deviceRoutes.get('/devices', getDevices);

export { deviceRoutes }