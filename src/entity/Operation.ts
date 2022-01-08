import { Field, Float, InputType, ObjectType, } from "type-graphql";
import { ObjectId } from "bson";
import { OptionalType } from '../graphql/types';
import { Entity, Column, ObjectIdColumn, BaseEntity } from "typeorm";

@ObjectType('BaseOperation')
@InputType('BaseInputOperation')
export class BaseOperation extends BaseEntity{

     @ObjectIdColumn({ generated: false })
     _id: ObjectId;

    @Field( () => String)
    @Column()
    description?: OptionalType<string>;

    @Field( () => Float, {nullable: true})
    @Column()
    quantity: number;

    @Field( () => Float, {nullable: true})
    @Column()
    price: number;
}

@InputType('InputOperation')
export class InputOperation extends BaseOperation {}

@ObjectType('Operation')
@Entity("operations")
export class Operation extends BaseOperation{
    @Field(() => Float)
    worth: number;
}
