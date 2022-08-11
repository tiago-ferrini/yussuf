import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item-columnar',
  templateUrl: './card-item-columnar.component.html',
  styleUrls: ['./card-item-columnar.component.scss'],
})
export class CardItemColumnarComponent implements OnInit {
  @Input('record') record: any;

  constructor() {}

  ngOnInit(): void {}
}
