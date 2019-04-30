import { Component, OnInit, Input } from "@angular/core";
import { Repository } from "src/models/repository";

@Component({
  selector: "app-result-item",
  templateUrl: "./result-item.component.html",
  styleUrls: ["./result-item.component.scss"]
})
export class ResultItemComponent implements OnInit {
  @Input() repository: Repository;

  constructor() {}

  ngOnInit() {
    this.repository.localUrl = `/details/${encodeURIComponent(
      this.repository.full_name
    )}`;
  }
}
