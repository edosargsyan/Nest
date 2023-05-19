import { Controller,Get,Post,Body,Put,Delete,Param, HttpCode, HttpStatus, Header} from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { UpdateDto } from './dto/update.dto';
import { PostService } from './post.service';
import { Postt } from './schemas/posts.schema';
@Controller()
export class PostController {
    constructor(private postsService:PostService) {}
    @Get()
    getAll():Promise<Postt[]>{
        return this.postsService.getAll()
    }

    @Get(':_id')
    getOne(@Param('id')id:string):Promise<Postt>{
       return this.postsService.getOne(id)
    }

    @Post('posts')  
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control","none")
    create(@Body() dto:PostDto){
        return this.postsService.create(dto)
    }
    @Put(':_id')
    update(@Body() updateDto:UpdateDto,@Param("id") id:string){
      return this.postsService.update(id,updateDto)
    }

    @Delete(':_id')
    del(@Param('id') id:string){
        return this.postsService.remove(id)
    }
}
