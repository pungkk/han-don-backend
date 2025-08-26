import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttachmentEntity } from './entities/attachment.entity';
import { CommentEntity } from './entities/comment.entity';
import { PostEntity } from './entities/post.entity';
import { EventModule } from './modules/event/event.module';
import { NoticeModule } from './modules/notice/notice.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity, CommentEntity, AttachmentEntity]),
    EventModule,
    NoticeModule,
  ],
})
export class PostModule {}
