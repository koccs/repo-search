import { Component, OnInit, Input } from "@angular/core";
import { Issue } from "src/models/issue";

@Component({
  selector: "app-issue-card",
  templateUrl: "./issue-card.component.html",
  styleUrls: ["./issue-card.component.scss"]
})
export class IssueCardComponent implements OnInit {
  constructor() {}
  @Input() issue: Issue;

  ngOnInit() {}
}
