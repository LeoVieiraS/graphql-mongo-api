import * as mongoDB from 'mongodb'
import { config } from '../../config'
export async function mongoConnector () {
  const {host, port, database, auth} = config.mongo

     
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(`mongodb://${host}:${port}`,{
      authSource:"admin",
      auth
    }
  );
          
  await client.connect();
      
  const db: mongoDB.Db = client.db(`${database}`);
  
  return db
 }