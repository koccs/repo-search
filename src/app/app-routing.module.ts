import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { DetailsComponent } from "./details/details.component";
import { DetailsResolverService } from "./services/details-resolver.service";

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
export class AppRoutingModule {}
