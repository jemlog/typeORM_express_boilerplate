import { createConnection, getConnectionOptions } from "typeorm"
import process from 'process'
import dotenv from 'dotenv'
dotenv.config()
const initConn = async ()=>{

  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  
  createConnection({...connectionOptions,name:"default"});
}

export default initConn
