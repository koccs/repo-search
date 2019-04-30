import { User } from "./user";

export class Repository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: User;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  score: number;
  localUrl: string;

  // constructor is only for testing
  constructor(full_name: string) {
    this.full_name = full_name;
  }
}
