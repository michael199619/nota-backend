import { Injectable } from '@nestjs/common';
import { <%=classify(name)%>Dto, <%=classify(name)%>Response, Usecase, I<%=classify(entity)%>Controller } from "@perfume-platform/common";

@Injectable()
  constructor(

  ) {
    super();
  }

  public excecute(dto: <%=classify(name)%>Dto) {
    return super.excecute(dto);
  }

  public async handler(dto: <%=classify(name)%>Dto): Promise<<%=classify(name)%>Response>{

    return ;
  }
}
