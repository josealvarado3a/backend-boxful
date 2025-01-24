import { IsString, IsEmail, IsArray, IsDateString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class PackageDto {
  @IsString()
  content: string;

  @IsString()
  weightPounds: string;

  @IsString()
  width: string;

  @IsString()
  height: string;

  @IsString()
  length: string;
}

export class CreateOrderDto {
  @IsString()
  collectionAddress: string;

  @IsDateString()
  scheduledDate: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  recipientAddress: string;

  @IsString()
  department: string;

  @IsString()
  municipality: string;

  @IsString()
  referencePoint: string;

  @IsString()
  instructions: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PackageDto)
  packages: PackageDto[];
}
