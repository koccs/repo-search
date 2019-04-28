import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";

import { SearchComponent } from "./search.component";
import { GithubService } from "../services/github.service";

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
});
