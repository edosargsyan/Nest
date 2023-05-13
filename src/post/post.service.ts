import { Injectable } from "@nestjs/common"
import { PostDto } from "./dto/post.dto"
import { InjectModel } from "@nestjs/mongoose"
import {Postt, PostDocument} from './schemas/posts.schema'
import { Model } from "mongoose"
import { UpdateDto } from "./dto/update.dto"
@Injectable()
export class PostService{
    constructor(@InjectModel(Postt.name) private postModel:Model<PostDocument>){}
    async getAll():Promise<Postt[]>{
        return this.postModel.find().exec()
    }
   async getOne(id:string){
       return this.postModel.findById(id)
    }
    async create(post:PostDto):Promise<Postt>{
      const newPost = new this.postModel(PostDto)
      return newPost.save()
    }
    async remove(id:string):Promise<Postt>{
         return this.postModel.findByIdAndRemove(id)
    }
    async update(id:string,postDto:UpdateDto):Promise<Postt>{
        return this.postModel.findByIdAndUpdate(id,postDto,{new:true})
    }
}