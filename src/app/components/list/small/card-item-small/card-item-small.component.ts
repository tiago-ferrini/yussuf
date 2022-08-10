import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item-small',
  templateUrl: './card-item-small.component.html',
  styleUrls: ['./card-item-small.component.scss'],
})
export class CardItemSmallComponent implements OnInit {
  @Input('record') record: any;

  constructor() {}

  ngOnInit(): void {}
}
