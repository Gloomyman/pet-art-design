import {environment} from '../../../environments/environment';

export class AuthDTO {
  code: string;
  private client_id: string;
  private client_secret: string;
  private redirect_uri: string = environment.host + '/auth-callback';

  constructor(clientId: string, clientSecret: string) {
    this.client_id = clientId;
    this.client_secret = clientSecret;
  }

  get clientId(): string {
    return this.client_id;
  }

  get clientSecret(): string {
    return this.client_secret;
  }

}
