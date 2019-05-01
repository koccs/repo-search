import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import "rxjs/Rx";

import { Repository } from "../../models/repository";
import { SearchResult } from "../../models/searchResult";
import { Issue } from "../../models/issue";

@Injectable()
export class GithubService {
  constructor(private http: HttpClient) {}

  readonly baseUrl = "https://api.github.com/";

  searchRepositories(name: string): Observable<Repository[]> {
    const params = new HttpParams().set("q", name);
    return this.http
      .get(`${this.baseUrl}search/repositories`, { params })
      .map((response: SearchResult<Repository>) => response.items);
  }

  getRepository(name: string): Observable<Repository> {
    return this.http
      .get(`${this.baseUrl}repos/${name}`)
      .map((response: Repository) => response);
  }

  getIssues(repositoryName: string): Observable<Issue[]> {
    return this.http
      .get(`${this.baseUrl}repos/${repositoryName}/issues`)
      .map((response: Issue[]) => response);
  }
}
