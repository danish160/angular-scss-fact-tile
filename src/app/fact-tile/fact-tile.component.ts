import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "fact-tile",
  templateUrl: "./fact-tile.component.html",
  styleUrls: ["./fact-tile.component.scss"]
})
export class FactTileComponent implements OnInit {
  @Input() fact: number;
  @Input() trend: string;
  @Input() trendcssclass: string;
  @Input() desc: string;
  @Input() colour: string;
  @Input() rows: number;
  @Input() style: string;
  paddingClass: string;
  asd2a2sd = 0;

  constructor() {}

  ngOnInit() {
    if (this.rows === 1) {
      this.paddingClass = "fact-padding1";
    } else {
      this.paddingClass = "fact-padding2";
    }
  }
}
