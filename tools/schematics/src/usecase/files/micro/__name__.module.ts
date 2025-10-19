import { Module } from '@nestjs/common';
import { <%=classify(name)%>Usecase } from './<%=dasherize(name)%>.usecase';

@Module({
  providers: [<%= classify(name)%>Usecase],
  exports: [<%= classify(name)%>Usecase],
})
export class <%= classify(name)%>Module { }
