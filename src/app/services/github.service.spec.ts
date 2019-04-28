import { TestBed, getTestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { GithubService } from "./github.service";
import { SearchResult } from "src/models/searchResult";
import { Repository } from "src/models/repository";

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

      const req = httpMock.expectOne(`${service.baseUrl}repositories?q=dum`);
      expect(req.request.method).toBe("GET");
      expect(req.request.url).toBe(`${service.baseUrl}repositories`);
      req.flush(searchResult);
    });
  });
});
