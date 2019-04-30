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

  readonly baseUrl = "https://api.github.com/search/";

  searchRepositories(name: string): Observable<Repository[]> {
    const params = new HttpParams().set("q", name);
    return this.http
      .get(`${this.baseUrl}repositories`, { params })
      .map((response: SearchResult<Repository>) => response.items);
  }

  getIssues(repositoryName: string): Observable<Issue[]> {
    const params = new HttpParams().set("q", `repo:${repositoryName}`);
    return this.http
      .get(`${this.baseUrl}issues`, { params })
      .map((response: SearchResult<Issue>) => response.items);
  }
}
