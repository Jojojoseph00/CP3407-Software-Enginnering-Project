import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  text = "Northern Lights is green to go...";

  onChangeText() {
    this.text = "Machine is Active, Welcome Mr Finche";
    console.log("Log to test");
  }
}
