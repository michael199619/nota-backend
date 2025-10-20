import { Injectable,NotFoundException,Scope } from '@nestjs/common';
import { GetUserResponse,LoginUserResponse } from '@perfume-platform/common';
import { Request,Response } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class ContextService {
  private session?: GetUserResponse;
  public res: Response;
  public req: Request;

  get user () {
    if (!this.session) {
        throw new NotFoundException();
    }

    return this.session;
  }

  set user(session: GetUserResponse) {
    this.session = session;
  }

  setTokens({accessToken, refreshToken, userId}: LoginUserResponse) {
    this.res.cookie('access_token', accessToken);
    this.res.cookie('refresh_token', refreshToken);
    this.res.cookie('user_id', userId);
}

removeTokens() {
    this.res.clearCookie('access_token');
    this.res.clearCookie('refresh_token');
    this.res.clearCookie('user_id');
}

get accessToken() {
    return this.req.cookies?.['access_token']
}

get refreshToken() {
    return this.req.cookies?.['refresh_token']
}

get userId() {
    return this.req.cookies?.['user_id']
}

}
