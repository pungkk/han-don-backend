import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'notice_posts' })
export class NoticePostEntity {
  @PrimaryColumn()
  postId: number;

  @Column()
  pinned: boolean; // 고정 게시글 여부
}
