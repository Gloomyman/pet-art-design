export class AuthDTO {
  pass: string;
  email: string;

  // private redirect_uri: string = environment.host + '/auth-callback';

  constructor(email: string, pass: string) {
    this.email = email;
    this.pass = pass;
  }

}
