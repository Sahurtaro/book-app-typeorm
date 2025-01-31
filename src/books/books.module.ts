import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { AuthorsModule } from '../authors/authors.module';
import { AuthorsService } from '../authors/authors.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Book]), AuthorsModule, AuthModule],
  controllers: [BooksController],
  providers: [BooksService, AuthorsService],
})
export class BooksModule {}
