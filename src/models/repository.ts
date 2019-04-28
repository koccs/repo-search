import { Owner } from "./owner";

export class Repository {
  id: Number;
  name: String;
  full_name: String;
  private: boolean;
  owner: Owner;
  html_url: String;
  description: String;
  language: String;
  stargazers_count: Number;
  watchers_count: Number;
  forks_count: Number;
  open_issues_count: Number;
  score: Number;

  constructor(name: string) {
    this.name = name;
  }
}
