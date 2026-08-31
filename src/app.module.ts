import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {ConfigModule} from '@nestjs/config'
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from '../auth'
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PostsModule,

    AuthModule.forRoot({ auth }),

    UserModule,
    
    BookmarkModule],

  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
