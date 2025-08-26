import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from './entities/board.entity';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [TypeOrmModule.forFeature([BoardEntity]), PostModule],
})
export class BoardModule {}
