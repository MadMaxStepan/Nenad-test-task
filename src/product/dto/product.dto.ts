import { IsString } from "class-validator";

class BasicProductDto {
  @IsString()
  readonly title: string
}

export class CreateProductDto extends BasicProductDto {

}

export class UpdateProductDto extends BasicProductDto {
  
}