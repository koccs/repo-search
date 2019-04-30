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
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

import { AppRoutingModule } from "./app-routing.module";
import { GithubService } from "./services/github.service";
import { DetailsResolverService } from "./services/details-resolver.service";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { ResultItemComponent } from "./result-item/result-item.component";
import { DetailsComponent } from "./details/details.component";
import { ShortNumberPipe } from "./short-number.pipe";

library.add(faStar, faCodeBranch, faExclamationCircle);

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultItemComponent,
    DetailsComponent,
    ShortNumberPipe
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
