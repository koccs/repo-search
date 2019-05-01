import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { FaIconStubComponent } from "../../testing/fa-icon-stub";
import { ShortNumberPipeMock } from "../../testing/short-number-pipe-mock";

import { Repository } from "../../models/repository";
import { ResultItemComponent } from "./result-item.component";
import { User } from "../../models/user";

describe("ResultItemComponent", () => {
  let component: ResultItemComponent;
  let fixture: ComponentFixture<ResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResultItemComponent,
        FaIconStubComponent,
        ShortNumberPipeMock
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultItemComponent);
    component = fixture.componentInstance;
    component.repository = new Repository("test/repo");
    component.repository.owner = new User("test user");
    component.repository.description = "this is the description of the repo";
    component.repository.open_issues_count = 123;
    component.repository.forks_count = 456;
    component.repository.stargazers_count = 7890;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("localUrl is set on repository", () => {
    expect(component.repository.localUrl).toBe("/details/test%2Frepo");
  });

  describe("layout should display", () => {
    let compiled: any;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    });

    it("repository name with 'dummy repo'", () => {
      const element = compiled.querySelector(".repository .header > a");
      expect(element.textContent).toContain("test/repo");
    });

    it("owner of repository with 'by test user'", () => {
      const element = compiled.querySelector(".repository .header .owner");
      expect(element.textContent).toContain("by test user");
    });

    it("number of stargazers with 'this is the description of the repo'", () => {
      const element = compiled.querySelector("#description");
      expect(element.textContent).toContain(
        "this is the description of the repo"
      );
    });

    it("number of stargazers with '123'", () => {
      const element = compiled.querySelector("#stargazers");
      expect(element.textContent).toContain("7890");
    });

    it("number of forks with '123'", () => {
      const element = compiled.querySelector("#forks");
      expect(element.textContent).toContain("456");
    });

    it("number of issue with '123'", () => {
      const element = compiled.querySelector("#issues");
      expect(element.textContent).toContain("123");
    });
  });
});
