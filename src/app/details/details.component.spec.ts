import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { ActivatedRouteStub } from "../../testing/activated-route-stub";

import { DetailsComponent } from "./details.component";
import { Issue } from "src/models/issue";
import { Repository } from "src/models/repository";

describe("DetailsComponent", () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  const activatedRoute = new ActivatedRouteStub({
    details: {
      repository: new Repository("dummy repo"),
      issues: [new Issue("issue 1"), new Issue("issue 2")]
    }
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("issues should be set from resolver", () => {
    expect(component.issues.length).toBe(2);
  });

  it("repository should be set from resolver", () => {
    expect(component.repository.full_name).toBe("dummy repo");
  });
});
