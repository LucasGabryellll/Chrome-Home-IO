import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import { CONSTANTS } from "./config/env";
import { routes } from "./routes";
import eWelink from "ewelink-api";

const app = express();

app.use(cors({
  origin: "*",
  allowedHeaders: "*",
  methods: ["GET", "PUT", "POST", "DELETE"]
}));

app.use(bodyParser.json());
app.use(routes);

app.listen(CONSTANTS.PORT, () => {
  console.log(`Server  is running in: ${CONSTANTS.API}`);
})