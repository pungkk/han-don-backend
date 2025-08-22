import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'event_posts' })
export class EventPostEntity {
  @PrimaryColumn()
  postId: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
