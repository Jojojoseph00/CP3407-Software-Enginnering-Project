import { Injectable } from "@angular/core";
import { Shop } from "./shop.model";

@Injectable({
  providedIn: "root"
})
export class ShopService {
  private shop: Shop[] = [
    {
      id: "i1",
      title: "Camera",
      imageUrl:
        "https://cdn.thewirecutter.com/wp-content/uploads/2018/06/mirrorless-camera-2x1-fullres-2024-1024x512.jpg",
      description: ["new condition", "low price", "some bs"]
    },
    {
      id: "i2",
      title: "Iphone X",
      imageUrl:
        "https://store.stormfront.co.uk/content/images/thumbs/0006975_iphone-x.jpeg",
      description: ["new condition", "low price", "some bs"]
    },
    {
      id: "i3",
      title: "Macbook Pro",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp13/space/mbp13-space-select-201807_GEO_SG?wid=892&hei=820&&qlt=80&.v=1531167604448",
      description: ["new condition", "low price", "some bs"]
    }
  ];

  constructor() {}

  getAllItems() {
    return [...this.shop];
  }

  getItem(shopId: string) {
    return {
      ...this.shop.find(shop => {
        return shop.id === shopId;
      })
    };
  }

  deleteItem(shopId: string) {
    this.shop = this.shop.filter(shop => {
      return shop.id !== shopId;
    });
  }
}
