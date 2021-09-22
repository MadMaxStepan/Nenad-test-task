import { ApiModelProperty } from '@nestjs/swagger';

export class DeleteResponseDto {
  @ApiModelProperty({ example: 1 })
  readonly id: number;

  @ApiModelProperty({ example: true })
  readonly success: boolean;
}