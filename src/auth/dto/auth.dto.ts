import { Post } from '@prisma/client'
import { Transform } from 'class-transformer'
import {
	IsEmail,
	IsEnum,
	IsOptional,
	IsString,
	MinLength,
} from 'class-validator'

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password must be at least 6 characters long',
	})
	@IsString()
	password: string

	@IsString()
	@IsOptional()
	name: string

	@IsString()
	@IsOptional()
	phone: string

	@IsEnum(Post)
	@IsOptional()
	@Transform(({ value }) => ('' + value).toLowerCase())
	post?: Post
}
