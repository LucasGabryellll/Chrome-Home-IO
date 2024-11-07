import { Request, Response } from "express";

import { connection } from "../service/ewelink";

const getDevices = async (red: Request, res: Response) => {

  try {

    //const devices = await connection.getDevices()

    if (connection) {
      await connection.getFirmwareVersion()
      return res.status(200).json({ result: connection });
    }

    return res.status(404).json({ message: "Devices not Found" });
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Error in Get Devices" });
  }
}

export { getDevices };