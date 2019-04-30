import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { ActivatedRouteStub } from "../../testing/activated-route-stub";

import { DetailsComponent } from "./details.component";

describe("DetailsComponent", () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  const activatedRoute = new ActivatedRouteStub();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }]
    }).compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.setParamMap({ fullName: "test%2Frepo" });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("propertyName should be set from route", () => {
    expect(component.repositoryName).toBe("test/repo");
  });
});
