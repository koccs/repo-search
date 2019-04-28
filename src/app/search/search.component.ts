import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  searchForm = this.formBuilder.group({
    name: ["", Validators.required]
  });

  ngOnInit() {}

  onSubmit() {
    console.log(this.searchForm.value);
  }
}
