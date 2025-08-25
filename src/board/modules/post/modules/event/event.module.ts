import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventPostEntity } from './entities/event-post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventPostEntity])],
})
export class EventModule {}
