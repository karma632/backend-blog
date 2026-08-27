import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { take } from 'rxjs';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService){}
  
  create(createPostDto: CreatePostDto) {
    return this.prisma.articles.create({
      data: createPostDto,
    })
  }

  findAll() {
    return this.prisma.articles.findMany()
  }

  findOne(id: string) {
    return this.prisma.articles.findFirst({ where: {id} });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.articles.update({
      where: {id},
      data: updatePostDto,
    });
  }

  remove(id: string) {
    return this.prisma.articles.delete({
      where: {id}
    });
  }
}
