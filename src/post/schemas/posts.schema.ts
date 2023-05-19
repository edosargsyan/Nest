import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type PostDocument = Postt & Document
@Schema()
export class Postt{
  @Prop()
  name:string

  @Prop()
  lastName:string

  @Prop()
  age:number
}

export const PostSchema = SchemaFactory.createForClass(Postt);