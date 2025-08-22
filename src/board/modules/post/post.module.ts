import { Module } from '@nestjs/common';
import { EventModule } from './modules/event/event.module';
import { NoticeModule } from './modules/notice/notice.module';

@Module({
  imports: [EventModule, NoticeModule],
})
export class PostModule {}
