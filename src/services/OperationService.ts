import { IPagination, IGenericObject } from "../graphql/types";
import { Operation } from '../entity/Operation';
export class SearchOptions {
    private paginationArgs: IPagination
    constructor(
        paginationArgs: IPagination = {}
    ) {
        this.paginationArgs = paginationArgs
    }

    getPagination(){
        return this.paginationArgs
    }
}

export class SearchOperationService {

    private options : SearchOptions

    constructor(options: SearchOptions){
        this.options = options
    }

    async searchAll():Promise<Array<Operation>> {

        let filters : IGenericObject = {}

        if(this.options.getPagination().page && this.options.getPagination().size){
            filters.skip = (this.options.getPagination().page! - 1) * this.options.getPagination().size!
            filters.take = this.options.getPagination().size!
        }

        const operations : Array<Operation> = await Operation.find({...filters})

        return operations
    }
}
