import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-list-columnar',
  templateUrl: './cards-list-columnar.component.html',
  styleUrls: ['./cards-list-columnar.component.scss'],
})
export class CardsListColumnarComponent implements OnInit {
  @Input('records') records: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
