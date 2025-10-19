import { Controller,Get,Query } from '@nestjs/common';
import { <%=classify(name)%>Dto, <%=classify(name)%>Response, <%= classify(entity)%>Publisher } from "@perfume-platform/common";
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';

@Controller('<%=dasherize(section)%>')
export class <%=classify(entity)%>Controller {
  constructor(
    private readonly <%= entity%>Publisher: <%= classify(entity)%>Publisher
  ) { }

  @Get()
  @ApiOperation({
    description: '',
  })
  @ApiResponse({
    type: <%=classify(name) %>Response
  })
  <%=camelize(name)%>(
  @Query() dto: <%=classify(name)%>Dto) {
    return firstValueFrom(this.<%= dasherize(entity)%>Publisher.<%=camelize(name)%>(dto))
  }
}
