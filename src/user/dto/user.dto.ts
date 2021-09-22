import { IsString } from "class-validator";

class BasicUserDto {
  @IsString()
  readonly name: string
}

export class CreateUserDto extends BasicUserDto {

}

export class UpdateUserDto extends BasicUserDto {
  
}