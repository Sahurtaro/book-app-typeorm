import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from '../../books/entities/book.entity';

@Entity()
export class Author {
  @Column({ primary: true, generated: true })
  id: number;
  @Column()
  name: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
