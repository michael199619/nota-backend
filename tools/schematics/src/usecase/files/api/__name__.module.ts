import { Module } from '@nestjs/common';
import { <%=dasherize(entity)%>PublisherModule } from '@perfume-platform/common';
import { <%=dasherize(entity)%>Controller } from './<%=dasherize(entity) %>.controller';

@Module({
    imports: [
        <%=dasherize(entity)%>PublisherModule.register(),
    ],
    controllers: [<%=dasherize(entity)%>Controller]
})
export class <%=dasherize(entity)%>Module { }
