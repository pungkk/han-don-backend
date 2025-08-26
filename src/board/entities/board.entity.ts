import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BoardCode } from '../constants/board-code.const';
import { PostEntity } from '../modules/post/entities/post.entity';

@Entity({ name: 'boards' })
export class BoardEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: Object.values(BoardCode),
  })
  code: BoardCode;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  /**********************************************
   *                relationship                *
   **********************************************/

  @OneToMany(() => PostEntity, (post) => post.board)
  posts: PostEntity[];
}
