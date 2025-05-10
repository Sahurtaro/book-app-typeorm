import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
