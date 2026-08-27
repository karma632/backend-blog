import { Controller, Delete, Get, Param, Post, Req } from "@nestjs/common";
import { BookmarkService } from "./bookmark.service";
import { Public } from "@thallesp/nestjs-better-auth";

@Controller("bookmarks")
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post(":articleId")
    createBookmark(
    @Param("articleId") articleId: string,
    @Req() req: any,
    ) {
    const userId = req.user.id;

    return this.bookmarkService.createBookmark(
            userId,
            articleId,
        );
    }

    @Get()
        getBookmarks(@Req() req: any) {
        const userId = req.user.id;

        return this.bookmarkService.getBookmarks(userId);
    }

   @Delete(':articleId')
    remove(
    @Req() req: any,
    @Param('articleId') articleId: string,
    ) {
        const userId = req.user.id;

    return this.bookmarkService.remove(userId, articleId);
}
}