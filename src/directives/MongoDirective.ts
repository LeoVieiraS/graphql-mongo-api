import { GraphQLDirective, DirectiveLocation, GraphQLField } from 'graphql'
import {SchemaDirectiveVisitor} from 'graphql-tools'
import {mongoConnector} from '../connectors/MongoProvider'

export class MongoDirective extends SchemaDirectiveVisitor {
    static getDirectiveDeclaration(){
        return new GraphQLDirective({
            name: 'mongo',
            locations: [DirectiveLocation.FIELD_DEFINITION]
        })
    }

    visitFieldDefinition(field: GraphQLField<any, any>): GraphQLField<any, any> | void | null {
        const next = field.resolve
        field.resolve = async function( result: any, args: any, context: any, info: any) {
            context.mongoDbConn = await mongoConnector()
            if (next) return next(result, args, context, info)
        }
    }
}