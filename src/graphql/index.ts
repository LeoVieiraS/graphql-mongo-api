import 'reflect-metadata'
import { buildSchemaSync } from 'type-graphql'
import { SchemaDirectiveVisitor } from 'graphql-tools'

export function getSchema() {

    const schema = buildSchemaSync({
        resolvers: [__dirname + '/**/resolvers.{ts,js}'],
        nullableByDefault: true,
        validate: false
    })

    SchemaDirectiveVisitor.visitSchemaDirectives(schema, {
       // mongoConnection: MongoDirective
    })

    return schema
}

module.exports = {
    getSchema
}