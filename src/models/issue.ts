import { User } from "./user";

export class Issue {
  id: number;
  title: string;
  url: string;
  user: User;
  state: string;
  body: string;
  score: number;

  // constructor is only for testing
  constructor(title: string) {
    this.title = title;
  }
}
