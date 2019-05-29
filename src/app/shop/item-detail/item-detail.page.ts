import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ShopService } from "../shop.service";
import { Shop } from "../shop.model";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.page.html",
  styleUrls: ["./item-detail.page.scss"]
})
export class ItemDetailPage implements OnInit {
  loadedShop: Shop;
  constructor(
    private activatedRoute: ActivatedRoute,
    private shopService: ShopService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("shopId")) {
        // redirect user
        return;
      }
      const shopId = paramMap.get("shopId");
      this.loadedShop = this.shopService.getItem(shopId);
    });
  }

  onDeleteItem() {
    this.shopService.deleteItem(this.loadedShop.id);
    this.router.navigate(["/shop"]);
  }
}
