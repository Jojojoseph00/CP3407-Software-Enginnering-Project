import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ShopService } from "../shop.service";
import { Shop } from "../shop.model";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.page.html",
  styleUrls: ["./item-detail.page.scss"]
})
export class ItemDetailPage implements OnInit {
  loadedShop: Shop;
  constructor(private activatedRoute, private shopService: ShopService) {}

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
}
