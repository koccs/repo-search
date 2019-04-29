import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Repository } from "../../models/repository";
import { ResultItemComponent } from "./result-item.component";

describe("ResultItemComponent", () => {
  let component: ResultItemComponent;
  let fixture: ComponentFixture<ResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultItemComponent);
    component = fixture.componentInstance;
    component.repository = new Repository("test repo");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
