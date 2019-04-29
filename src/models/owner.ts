export class Owner {
  login: String;
  id: Number;
  url: String;
  avatar_url: String;
  html_url: String;
  type: String;

  // constructor is only for testing
  constructor(login: String) {
    this.login = login;
  }
}
