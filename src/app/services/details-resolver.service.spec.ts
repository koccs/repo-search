import { TestBed } from "@angular/core/testing";

import { DetailsResolverService } from "./details-resolver.service";
import { GithubService } from "./github.service";
import { Repository } from "../../models/repository";
import { Issue } from "../../models/issue";
import { ActivatedRouteSnapshot } from "@angular/router";
import { of } from "rxjs";

describe("DetailsResolverService", () => {
  let service: DetailsResolverService;
  let githubServiceSpy: { getRepository: jasmine.Spy; getIssues: jasmine.Spy };

  beforeEach(() => {
    githubServiceSpy = jasmine.createSpyObj("GithubService", [
      "getRepository",
      "getIssues"
    ]);
    TestBed.configureTestingModule({
      providers: [{ provide: GithubService, useValue: githubServiceSpy }]
    });
    service = TestBed.get(DetailsResolverService);

    githubServiceSpy.getIssues.and.returnValue(of(new Array<Issue>()));
    githubServiceSpy.getRepository.and.returnValue(of(new Repository("dummy")));
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("resolve calls", () => {
    it("getRepository on github service", () => {
      service.resolve(new ActivatedRouteSnapshot()).subscribe(() => {
        expect(githubServiceSpy.getRepository.calls.count()).toBe(1);
      });
    });

    it("getIssues on github service", () => {
      service.resolve(new ActivatedRouteSnapshot()).subscribe(() => {
        expect(githubServiceSpy.getIssues.calls.count()).toBe(1);
      });
    });
  });
});
