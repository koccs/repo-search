export class User {
  login: string;
  id: number;
  url: string;
  avatar_url: string;
  html_url: string;
  type: string;

  // constructor is only for testing
  constructor(login: string) {
    this.login = login;
  }
}
