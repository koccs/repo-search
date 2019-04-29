import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { Pipe, PipeTransform } from "@angular/core";

import { Repository } from "../../models/repository";
import { ResultItemComponent } from "./result-item.component";
import { Owner } from "../../models/owner";

@Component({ selector: "fa-icon", template: "" })
class FaIconStubComponent {}

@Pipe({ name: "shortNumber" })
class MockPipe implements PipeTransform {
  transform(value: number): number {
    return value;
  }
}

describe("ResultItemComponent", () => {
  let component: ResultItemComponent;
  let fixture: ComponentFixture<ResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultItemComponent, FaIconStubComponent, MockPipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultItemComponent);
    component = fixture.componentInstance;
    component.repository = new Repository("test repo");
    component.repository.owner = new Owner("test user");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
