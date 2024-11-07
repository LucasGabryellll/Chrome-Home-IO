import dotenv from "dotenv";

dotenv.config();

const CONSTANTS = {
  PORT: process.env.PORT_SERVER,
  API: process.env.API,
  EWELINK_LOGIN: process.env.LOGIN_ELINK,
  EWELINK_PASSWORD: process.env.PASS_ELINK,
}

export { CONSTANTS };