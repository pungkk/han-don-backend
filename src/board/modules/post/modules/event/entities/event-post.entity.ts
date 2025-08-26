import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PostEntity } from '../../../entities/post.entity';

@Entity({ name: 'event_posts' })
export class EventPostEntity {
  @PrimaryColumn()
  postId: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  /**********************************************
   *                relationship                *
   **********************************************/

  @OneToOne(() => PostEntity, (post) => post.eventPost)
  @JoinColumn({ name: 'post_id' })
  post: PostEntity;
}
