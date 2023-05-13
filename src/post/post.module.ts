import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import {MongooseModule} from '@nestjs/mongoose'
import { Postt,PostSchema } from './schemas/posts.schema';
@Module({
  controllers: [PostController],
  providers: [PostService],
  imports:[
    MongooseModule.forFeature(
      [
        {name:Postt.name,schema:PostSchema}
      ]
    )
  ]
})
export class PostModule{}
