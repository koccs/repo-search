import { ReplaySubject } from "rxjs";

export class ActivatedRouteStub {
  private subject = new ReplaySubject<any>();

  constructor(initialData?: any) {
    this.setData(initialData);
  }

  readonly data = this.subject.asObservable();

  setData(data?: any) {
    this.subject.next(data);
  }
}
