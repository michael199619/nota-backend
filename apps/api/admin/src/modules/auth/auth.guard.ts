import {
  CanActivate,
  Injectable
} from '@nestjs/common';
import { AuthService,ContextService,UserPublisher } from '@perfume-platform/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private ctx: ContextService,
    private readonly usersPublisher: UserPublisher,
    private readonly authService: AuthService
  ) {}

  async canActivate(): Promise<boolean> {
    try {
      const token = this.ctx.accessToken;

      if (!token) {
        return false;
      }

      const tokenPayload = await this.authService.getPayloadFromToken<{id: string}>(token);

      if (!tokenPayload) {
        return false;
      }

      const user = await firstValueFrom(
        this.usersPublisher.getUser({
          id: tokenPayload.id
        }),
      );

      if (!user) {
        return false;
      }

      this.ctx.user = user;
      return true;
    } catch (e) {
      return false;
    }
  }
}
