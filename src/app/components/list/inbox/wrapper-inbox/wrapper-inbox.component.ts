import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper-inbox',
  templateUrl: './wrapper-inbox.component.html',
  styleUrls: ['./wrapper-inbox.component.scss'],
})
export class WrapperInboxComponent implements OnInit {
  @Input('records') records: any[] = [];
  choosedRecord: any;
  constructor() {}

  ngOnInit(): void {}

  itemOnChoose(record: any) {
    console.log('itemOnChoose', record);
    this.choosedRecord = record;
  }
}
