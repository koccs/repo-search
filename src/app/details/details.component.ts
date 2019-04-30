import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Issue } from "src/models/issue";
import { Repository } from "src/models/repository";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  issues: Issue[];
  repository: Repository;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.repository = data.details.repository;
      this.issues = data.details.issues;
    });
  }
}
