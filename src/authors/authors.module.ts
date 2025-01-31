import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Author]), AuthModule],
  controllers: [AuthorsController],
  providers: [AuthorsService],
  exports: [TypeOrmModule],
})
export class AuthorsModule {}
