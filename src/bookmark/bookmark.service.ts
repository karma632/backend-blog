import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class BookmarkService {
  constructor(private readonly prisma: PrismaService) {}

  async createBookmark(userId: string, articleId: string) {
     console.log("CREATING BOOKMARK");
  console.log("CREATE USER ID:", userId);
  console.log("CREATE ARTICLE ID:", articleId);
    return this.prisma.bookmark.create({
      data: {
        userId,
        articleId,
      },
    });
  }

  async getBookmarks(userId: string) {
        return this.prisma.bookmark.findMany({
            where: {
            userId,
            },
            include: {
            article: true,
            },
            orderBy: {
            createdAt: "desc",
            },
        });
    };
    
    async remove(userId: string, articleId: string) {
    return this.prisma.bookmark.delete({
        where: {
        userId_articleId: {
            userId,
            articleId,
        },
        },
    });
    }   
}

