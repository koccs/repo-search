import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { GithubService } from "../services/github.service";
import { Repository } from "src/models/repository";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private service: GithubService
  ) {}

  repositories: Array<Repository> = null;
  searchForm = this.formBuilder.group({
    name: ["", Validators.required]
  });

  ngOnInit() {}

  onSubmit(): void {
    this.service
      .searchRepositories(this.searchForm.value.name)
      .subscribe(repositories => {
        this.repositories = repositories;
      });
  }
}
