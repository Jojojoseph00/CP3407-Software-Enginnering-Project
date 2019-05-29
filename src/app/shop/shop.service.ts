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
        "https://cdn.thewirecutter.com/wp-content/uploads/2018/06/mirrorless-camera-2x1-fullres-2024-1024x512.jpg",
      description: ["new condition", "low price", "some bs"]
    },
    {
      id: "i3",
      title: "Macbook Pro",
      imageUrl:
        "https://cdn.thewirecutter.com/wp-content/uploads/2018/06/mirrorless-camera-2x1-fullres-2024-1024x512.jpg",
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
}
