import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticePostEntity } from './entities/notice-post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NoticePostEntity])],
})
export class NoticeModule {}
