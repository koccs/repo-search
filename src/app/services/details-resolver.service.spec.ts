import { TestBed } from "@angular/core/testing";

import { DetailsResolverService } from "./details-resolver.service";
import { GithubService } from "./github.service";

describe("DetailsResolverService", () => {
  let githubServiceSpy: { searchRepositories: jasmine.Spy };

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: GithubService, useValue: githubServiceSpy }]
    })
  );

  it("should be created", () => {
    const service: DetailsResolverService = TestBed.get(DetailsResolverService);
    expect(service).toBeTruthy();
  });
});
