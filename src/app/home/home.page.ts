import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  text = "Test button...";

  onChangeText() {
    this.text = "We are fucked";
    console.log("Log to test");
  }
}
