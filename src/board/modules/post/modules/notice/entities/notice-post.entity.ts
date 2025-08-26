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

@Entity({ name: 'notice_posts' })
export class NoticePostEntity {
  @PrimaryColumn()
  postId: number;

  @Column()
  pinned: boolean; // 고정 게시글 여부

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
