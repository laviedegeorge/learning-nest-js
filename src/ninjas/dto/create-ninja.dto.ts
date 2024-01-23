import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  id: number;
  @MinLength(3)
  name: string;
  @IsEnum(['stars', 'nunchucks'], { message: 'Enter a correct weapon' })
  weapon: 'stars' | 'nunchucks';
}
