import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import "rxjs/Rx";

import { Repository } from "../../models/repository";
import { SearchResult } from "../../models/searchResult";

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
}
