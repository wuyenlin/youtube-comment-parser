import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public content!: string;

  @Column()
  public user!: string;

  @Column()
  public time!: string;

  @Column()
  public likeNumber!: string;
}
