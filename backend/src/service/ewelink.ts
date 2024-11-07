import EWelink from "ewelink-api";
import { CONSTANTS } from "../config/env";

const connection = new EWelink({
  email: `${CONSTANTS.EWELINK_LOGIN}`,
  password: `${CONSTANTS.EWELINK_PASSWORD}`,
});


export { connection };