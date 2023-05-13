import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type PostDocument = Postt & Document
@Schema()
export class Postt{
  @Prop()
  content:String

  @Prop()
  userName:String
}

export const PostSchema = SchemaFactory.createForClass(Postt);