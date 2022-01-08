import { ApolloServer } from 'apollo-server'
import { getSchema } from './graphql'
import { createConnection } from 'typeorm';
import {mongoConnector} from './connectors/MongoProvider'
async function  startServer() {
    const schema = getSchema()
    
    //const mongoDbConn = await mongoConnector()
    await createConnection()

    const server = new ApolloServer({
        schema,
        context: async ({req}) => {
            return {
                headers: req?.headers,
                req,
            }
        
        }  
    })

    await server.listen(4000).then(({
        url
      }) => {
        console.log(`🚀 Server ready at ${url}`)
    })
}

startServer()