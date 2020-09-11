export class AuthDTO {
  pass: string;
  email: string;

  constructor(email: string, pass: string) {
    this.email = email;
    this.pass = pass;
  }

}
