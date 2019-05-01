import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { FaIconStubComponent } from "../../testing/fa-icon-stub";

import { IssueCardComponent } from "./issue-card.component";
import { Issue } from "../../models/issue";
import { User } from "../../models/user";

describe("IssueCardComponent", () => {
  let component: IssueCardComponent;
  let fixture: ComponentFixture<IssueCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssueCardComponent, FaIconStubComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueCardComponent);
    component = fixture.componentInstance;
    component.issue = new Issue("test issue");
    component.issue.user = new User("test reporter");
    component.issue.updated_at = new Date(2019, 4, 1, 12, 34);
    component.issue.comments = 2;
    component.issue.body = "this is the body of the issue";
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  describe("layout should display", () => {
    let compiled: any;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    });

    it("issue title with 'test issue'", () => {
      const element = compiled.querySelector(".issue-card .title > a");
      expect(element.textContent).toContain("test issue");
    });

    it("reporter of issue with 'by test reporter'", () => {
      const element = compiled.querySelector(".issue-card .title .user");
      expect(element.textContent).toContain("by test reporter");
    });

    it("update date of issue with 'May 1, 2019'", () => {
      const element = compiled.querySelector(
        ".issue-card .issue-details .stats .date"
      );
      expect(element.textContent).toContain("May 1, 2019");
    });

    it("comments count of issue with '2'", () => {
      const element = compiled.querySelector(
        ".issue-card .issue-details .stats .comments"
      );
      expect(element.textContent).toContain("2");
    });

    it("body count of issue with 'this is the body of the issue'", () => {
      const element = compiled.querySelector(
        ".issue-card .issue-details .description"
      );
      expect(element.textContent).toContain("this is the body of the issue");
    });
  });
});
