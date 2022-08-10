import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-list-small',
  templateUrl: './cards-list-small.component.html',
  styleUrls: ['./cards-list-small.component.scss'],
})
export class CardsListSmallComponent implements OnInit {
  @Input('records') records: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
