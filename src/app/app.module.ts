import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { NgxSpinnerModule } from "ngx-spinner";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faCodeBranch,
  faExclamationCircle,
  faChevronLeft,
  faCalendar,
  faComments,
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

import { AppRoutingModule } from "./app-routing.module";
import { GithubService } from "./services/github.service";
import { DetailsResolverService } from "./services/details-resolver.service";
import { ShortNumberPipe } from "./short-number.pipe";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { ResultItemComponent } from "./result-item/result-item.component";
import { DetailsComponent } from "./details/details.component";
import { IssueCardComponent } from "./issue-card/issue-card.component";

library.add(
  faStar,
  faCodeBranch,
  faExclamationCircle,
  faChevronLeft,
  faCalendar,
  faComments,
  faCheckCircle,
  faTimesCircle
);

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultItemComponent,
    DetailsComponent,
    ShortNumberPipe,
    IssueCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    FontAwesomeModule
  ],
  providers: [GithubService, DetailsResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {}
