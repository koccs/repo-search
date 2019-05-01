import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError
} from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { DetailsComponent } from "./details/details.component";
import { DetailsResolverService } from "./services/details-resolver.service";
import { NgxSpinnerService } from "ngx-spinner";

const routes: Routes = [
  { path: "", component: SearchComponent },
  {
    path: "details/:fullName",
    component: DetailsComponent,
    resolve: { details: DetailsResolverService }
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router, private spinner: NgxSpinnerService) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        spinner.show();
      }

      if (event instanceof NavigationEnd || event instanceof NavigationError) {
        spinner.hide();
      }
    });
  }
}
