import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
  }

  @Get(':id')
  getNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
}
