import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { Role } from '../common/enum/role.enum';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  @Auth(Role.ADMIN)
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.authorsService.findOne(id);
  }

  @Patch(':id')
  @Auth(Role.ADMIN)
  update(@Param('id') id: number, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorsService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  @Auth(Role.ADMIN)
  remove(@Param('id') id: number) {
    return this.authorsService.remove(id);
  }
}
