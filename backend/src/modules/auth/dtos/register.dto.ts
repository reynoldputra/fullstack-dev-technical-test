import { ApiProperty } from '@nestjs/swagger';
import { GenderType, UserType } from '@prisma/client';
import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsPhoneNumber,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';

export class RegisterDto {
    @ApiProperty({
        example: 'new user',
    })
    @IsString({
        message: 'Username must be a string',
    })
    @Matches(/^[A-Za-z0-9]+$/, {
        message: 'Username must contain alphanumeric characters',
    })
    @MinLength(8, {
        message: 'Username must be at least 8 characters long',
    })
    @IsNotEmpty({
        message: 'Username should not be empty',
    })
    username: string;

    @ApiProperty({
        example: 'P@ss123Word',
    })
    @IsNotEmpty({
        message: 'Password should not be empty',
    })
    @Matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[_\W])(?!.* ).{8,}$/, {
        message:
            'The password must contain uppercase letters, lowercase letters, simbols, and numbers',
    })
    @MinLength(8, {
        message: 'The password must be at least 8 characters long',
    })
    password: string;

    @ApiProperty({
        example: 'User New',
    })
    @IsString({
        message: 'Name must be a string',
    })
    @MinLength(8, {
        message: 'Name must be at least 8 characters long',
    })
    @IsNotEmpty({
        message: 'Name should not be empty',
    })
    name: string;

    @ApiProperty({
        example: 'newuser@gmail.com',
    })
    @IsEmail(
        {},
        {
            message: 'Email must be valid',
        },
    )
    email: string;

    @ApiProperty({
        example: '+62812123123',
    })
    @IsNotEmpty({
        message: 'Phone number should not be empty',
    })
    @IsPhoneNumber(null, {
        message: 'Phone number must be valid (example : +62123456789)',
    })
    no_telp: string;

    @ApiProperty({
        example: 'MALE',
    })
    @IsEnum(GenderType, {
        message: 'Gender must be FEMALE or MALE.',
    })
    @IsNotEmpty({
        message: 'Gender should not be empty',
    })
    gender: GenderType;

    @ApiProperty({
        example: 'USER',
    })
    @IsEnum(UserType, {
        message: 'Role must be USER or AUTHOR.',
    })
    @IsNotEmpty({
        message: 'Role should not be empty',
    })
    user_type: UserType;
}
