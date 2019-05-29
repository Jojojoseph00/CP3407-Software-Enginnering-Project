import { Component, OnInit } from "@angular/core";
import { Shop } from "./shop.model";
import { ShopService } from "./shop.service";
import { TouchSequence } from "selenium-webdriver";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.page.html",
  styleUrls: ["./shop.page.scss"]
})
export class ShopPage implements OnInit {
  shop: Shop[];
  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.shop = this.shopService.getAllItems();
  }
}
