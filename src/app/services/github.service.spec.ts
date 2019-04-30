import { TestBed, getTestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { GithubService } from "./github.service";
import { SearchResult } from "src/models/searchResult";
import { Repository } from "src/models/repository";
import { Issue } from "src/models/issue";

describe("GithubService", () => {
  let injector: TestBed;
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
    injector = getTestBed();
    service = injector.get(GithubService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    const service: GithubService = TestBed.get(GithubService);
    expect(service).toBeTruthy();
  });

  describe("searchRepositories", () => {
    it("should return Observable<Respository[]> with expected result", () => {
      const expectedResult = new Array<Repository>();
      expectedResult.push(new Repository("dummy repo"));
      const searchResult = new SearchResult<Repository>(1, expectedResult);

      service.searchRepositories("dum").subscribe(repos => {
        expect(repos.length).toBe(1);
        expect(repos).toEqual(expectedResult);
      });

      const req = httpMock.expectOne(
        `${service.baseUrl}search/repositories?q=dum`
      );
      expect(req.request.method).toBe("GET");
      expect(req.request.url).toBe(`${service.baseUrl}search/repositories`);
      req.flush(searchResult);
    });
  });

  describe("getRepository", () => {
    it("should return Observable<Respository> with expected result", () => {
      const expectedResult = new Repository("dummy repo");

      service.getRepository("user/dum").subscribe(repos => {
        expect(repos).toEqual(expectedResult);
      });

      const req = httpMock.expectOne(`${service.baseUrl}repos/user/dum`);
      expect(req.request.method).toBe("GET");
      req.flush(expectedResult);
    });
  });

  describe("getIssues", () => {
    it("should return Observable<Issue[]> with expected result", () => {
      const expectedResult = new Array<Issue>();
      expectedResult.push(new Issue("issue example"));
      const searchResult = new SearchResult<Issue>(1, expectedResult);

      service.getIssues("dum").subscribe(repos => {
        expect(repos.length).toBe(1);
        expect(repos).toEqual(expectedResult);
      });

      const req = httpMock.expectOne(
        `${service.baseUrl}search/issues?q=repo:dum`
      );
      expect(req.request.method).toBe("GET");
      expect(req.request.url).toBe(`${service.baseUrl}search/issues`);
      req.flush(searchResult);
    });
  });
});
