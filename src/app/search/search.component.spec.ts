import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { of } from "rxjs";

import { SearchComponent } from "./search.component";
import { GithubService } from "../services/github.service";
import { Repository } from "src/models/repository";
import { NgxSpinnerService } from "ngx-spinner";

@Component({ selector: "app-result-item", template: "" })
class ResultItemStubComponent {}

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let githubServiceSpy: { searchRepositories: jasmine.Spy };
  let spinnerServiceSpy: { show: jasmine.Spy; hide: jasmine.Spy };

  beforeEach(async(() => {
    githubServiceSpy = jasmine.createSpyObj("GithubService", [
      "searchRepositories"
    ]);
    spinnerServiceSpy = jasmine.createSpyObj("NgxSpinnerService", [
      "show",
      "hide"
    ]);

    TestBed.configureTestingModule({
      declarations: [SearchComponent, ResultItemStubComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: GithubService, useValue: githubServiceSpy },
        { provide: NgxSpinnerService, useValue: spinnerServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
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

  describe("contains an input", () => {
    let compiled: any;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    });

    it("and it should be rendered with placeholder 'Search a github repository by name'", () => {
      expect(compiled.querySelector("input").attributes.placeholder.value).toBe(
        "Search a github repository by name"
      );
    });

    it("and it should be invalid but untouched initially", () => {
      const classNames = compiled.querySelector("input").className;
      const isNgInvalid = classNames.indexOf("ng-invalid") > -1;
      const isNgUntouched = classNames.indexOf("ng-untouched") > -1;
      expect(isNgInvalid && isNgUntouched).toBe(true);
    });

    it("and it should be invalid and touched after lost focus without value", () => {
      const input = compiled.querySelector("input");
      input.dispatchEvent(new Event("focus"));
      input.dispatchEvent(new Event("blur"));
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        const classNames = input.className;
        const isNgInvalid = classNames.indexOf("ng-invalid") > -1;
        const isNgTouched = classNames.indexOf("ng-touched") > -1;
        expect(isNgInvalid && isNgTouched).toBe(true);
      });
    });

    it("and it should be valid after value is set", () => {
      component.searchForm.controls["name"].setValue("test");
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        const classNames = compiled.querySelector("input").className;
        const isNgValid = classNames.indexOf("ng-valid") > -1;
        expect(isNgValid).toBe(true);
      });
    });
  });

  describe("contains a button", () => {
    let compiled: any;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    });

    it("and it should be rendered with text 'search'", () => {
      expect(compiled.querySelector("button").textContent).toContain("Search");
    });

    it("and it should be disabled until form is invalid", () => {
      expect(compiled.querySelector("button").disabled).toBeTruthy();
    });

    it("and it should be enabled after name field is set", () => {
      component.searchForm.controls["name"].setValue("test");
      fixture.detectChanges();

      fixture.whenStable().then(() => {
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

    it("then NgxSpinnerService .show and .hide has been called", () => {
      expect(spinnerServiceSpy.show.calls.count()).toBe(1);

      fixture.whenStable().then(() => {
        expect(spinnerServiceSpy.hide.calls.count()).toBe(1);
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
