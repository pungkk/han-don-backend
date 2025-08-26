import { BoardEntity } from 'src/board/entities/board.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EventPostEntity } from '../modules/event/entities/event-post.entity';
import { NoticePostEntity } from '../modules/notice/entities/notice-post.entity';
import { AttachmentEntity } from './attachment.entity';
import { CommentEntity } from './comment.entity';

/**
 * 게시판 공통 엔티티
 */
@Entity({ name: 'posts' })
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  boardId: number;

  @Column()
  title: string;

  @Column({
    type: 'longtext',
  })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  /**********************************************
   *                relationship                *
   **********************************************/

  @ManyToOne(() => BoardEntity, (board) => board.posts)
  @JoinColumn({ name: 'board_id' })
  board: BoardEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: CommentEntity[];

  @OneToMany(() => AttachmentEntity, (attachment) => attachment.post)
  attachments: AttachmentEntity[];

  @OneToOne(() => EventPostEntity, (eventPost) => eventPost.post, {
    nullable: true,
  })
  eventPost: EventPostEntity | null;

  @OneToOne(() => NoticePostEntity, (noticePost) => noticePost.post, {
    nullable: true,
  })
  noticePost: NoticePostEntity | null;
}
