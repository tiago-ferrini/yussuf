import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item-default',
  templateUrl: './card-item-default.component.html',
  styleUrls: ['./card-item-default.component.scss'],
})
export class CardItemDefaultComponent implements OnInit {
  @Input('record') record: any;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.record);
    }, 1000);
  }
}
