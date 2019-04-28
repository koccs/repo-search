import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";

import { SearchComponent } from "./search.component";
import { GithubService } from "../services/github.service";
import { Repository } from "src/models/repository";
import { of } from "rxjs";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let githubServiceSpy: { searchRepositories: jasmine.Spy };

  beforeEach(async(() => {
    githubServiceSpy = jasmine.createSpyObj("GithubService", [
      "searchRepositories"
    ]);
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: GithubService, useValue: githubServiceSpy }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("contains a form", () => {
    it("and it should be rendered", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("form")).toBeTruthy();
    });

    it("and it should be invalid after initialization", () => {
      expect(component.searchForm.valid).toBeFalsy();
    });

    it("and it should be valid after name field is set", () => {
      component.searchForm.controls["name"].setValue("test");

      fixture.whenStable().then(() => {
        expect(component.searchForm.valid).toBeTruthy();
      });
    });
  });

  describe("contains a button", () => {
    it("and it should be rendered with text 'search'", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("button").textContent).toContain("Search");
    });

    it("and it should be disabled until form is invalid", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("button").disabled).toBeTruthy();
    });

    it("and it should be enabled after name field is set", () => {
      component.searchForm.controls["name"].setValue("test");
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("button").disabled).toBeFalsy();
      });
    });
  });

  describe("when onSubmit is called", () => {
    const testRepos = new Array<Repository>();
    testRepos.push(new Repository("test 1"));
    testRepos.push(new Repository("test 2"));

    beforeEach(() => {
      githubServiceSpy.searchRepositories.and.returnValue(of(testRepos));

      component.searchForm.controls["name"].setValue("test");
      component.onSubmit();
      fixture.detectChanges();
    });

    it("then GithubService has been called", () => {
      fixture.whenStable().then(() => {
        expect(githubServiceSpy.searchRepositories.calls.count()).toBe(1);
      });
    });

    it("then component.repositories will be set to expected", () => {
      fixture.whenStable().then(() => {
        expect(component.repositories).toEqual(testRepos);
        expect(component.repositories.length).toEqual(2);
      });
    });
  });
});
