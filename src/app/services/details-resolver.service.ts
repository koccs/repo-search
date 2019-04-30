import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { GithubService } from "./github.service";

@Injectable({
  providedIn: "root"
})
export class DetailsResolverService {
  constructor(private githubService: GithubService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const fullName = decodeURIComponent(route.paramMap.get("fullName"));

    return Observable.forkJoin(
      this.githubService.getRepository(fullName),
      this.githubService.getIssues(fullName)
    ).map(allResponses => {
      return {
        repository: allResponses[0],
        issues: allResponses[1]
      };
    });
  }
}
