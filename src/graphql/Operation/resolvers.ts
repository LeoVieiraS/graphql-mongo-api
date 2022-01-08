import { Arg, Ctx, Directive, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { InputOperation, Operation } from '../../entity/Operation';
import { SearchOperationService, SearchOptions } from "../../services/OperationService";

@Resolver(Operation)
export class OperationResolver {
  @Query(() => [Operation])
  async operations(
    @Arg('page') page: number,
    @Arg('size') size: number,
    @Ctx()
    context?: any
  ): Promise<Operation[]> {

    const options : SearchOptions = new SearchOptions({page, size})
    const searchOperations : SearchOperationService = new SearchOperationService(options)
    const operations : Operation[] = await  searchOperations.searchAll()
    return operations
  }

  @Mutation(() => Operation)
  async insertOperation(
    @Arg('data') data: InputOperation,
    @Ctx() context?: any
  ): Promise<Operation> {
    
    const {description, quantity, price} = data
   
    const op = await Operation.create({
      description,
      quantity,
      price
    }).save()
    return op
  }

  @FieldResolver()
  async worth(@Root() parent: Operation) {
    return parent.price * parent.quantity
  }
    
}
