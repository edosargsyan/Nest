import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type PostDocument = Postt & Document
@Schema()
export class Postt{
  @Prop()
  content:string

  @Prop()
  userName:string
}

export const PostSchema = SchemaFactory.createForClass(Postt);