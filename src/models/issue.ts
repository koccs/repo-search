import { User } from "./user";

export class Issue {
  id: number;
  title: string;
  html_url: string;
  user: User;
  state: string;
  body: string;
  score: number;
  updated_at: Date;
  comments: number;

  // constructor is only for testing
  constructor(title: string) {
    this.title = title;
  }
}
