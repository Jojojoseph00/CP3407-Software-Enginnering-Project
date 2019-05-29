import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "shop", pathMatch: "full" },
  {
    path: "shop",
    children: [
      {
        path: "",
        loadChildren: "./shop/shop.module#ShopPageModule"
      },
      {
        path: ":shopId",
        loadChildren:
          "./shop/item-detail/item-detail.module#ItemDetailPageModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
