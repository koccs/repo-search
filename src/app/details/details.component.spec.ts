import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ActivatedRouteStub } from "../../testing/activated-route-stub";

import { FaIconStubComponent } from "../../testing/fa-icon-stub";
import { ShortNumberPipeMock } from "../../testing/short-number-pipe-mock";

import { DetailsComponent } from "./details.component";
import { Issue } from "src/models/issue";
import { Repository } from "src/models/repository";
import { User } from "src/models/user";

describe("DetailsComponent", () => {
  const testRepository = new Repository("dummy repo");
  testRepository.owner = new User("test owner");
  testRepository.open_issues_count = 123;

  const testIssue1 = new Issue("test 1");
  testIssue1.user = new User("reporter 1");
  const testIssue2 = new Issue("test 2");
  testIssue2.user = new User("reporter 2");

  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  const activatedRoute = new ActivatedRouteStub({
    details: {
      repository: testRepository,
      issues: [testIssue1, testIssue2]
    }
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailsComponent,
        FaIconStubComponent,
        ShortNumberPipeMock
      ],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }],
      schemas: [NO_ERRORS_SCHEMA]
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

  describe("layout should display", () => {
    let compiled: any;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    });

    it("repository name with 'dummy repo'", () => {
      const element = compiled.querySelector(".details .header .title > a");
      expect(element.textContent).toContain("dummy repo");
    });

    it("owner of repository with 'by test owner'", () => {
      const element = compiled.querySelector(".details .header .title .owner");
      expect(element.textContent).toContain("by test owner");
    });

    it("number of issue with '123'", () => {
      const element = compiled.querySelector(".details .body h4");
      expect(element.textContent).toContain("123");
    });

    it("2 issue boxes", () => {
      const elements = compiled.querySelectorAll(
        ".details .body .issues .issue"
      );
      expect(elements.length).toBe(2);
    });
  });
});
