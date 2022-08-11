import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detail-inbox',
  templateUrl: './item-detail-inbox.component.html',
  styleUrls: ['./item-detail-inbox.component.scss'],
})
export class ItemDetailInboxComponent implements OnInit {
  @Input('record') record: any;

  constructor() {}

  ngOnInit(): void {}
}
