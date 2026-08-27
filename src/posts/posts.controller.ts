import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Public, Roles } from '@thallesp/nestjs-better-auth';
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @Roles(['ADMIN','EDITOR'])
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Public()
  @Get("all-post")
  findAll(){
    return this.postsService.findAll( );
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  @Roles(['ADMIN','EDITOR'])
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  @Roles(['ADMIN'])
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
