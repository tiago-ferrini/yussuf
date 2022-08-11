import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items-list-inbox',
  templateUrl: './items-list-inbox.component.html',
  styleUrls: ['./items-list-inbox.component.scss'],
})
export class ItemsListInboxComponent implements OnInit {
  @Input('records') records: any[] = [];
  @Output() itemChoosed = new EventEmitter<any>(); //TODO change type
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.itemChoosed.emit(this.records[0]);
    }, 1000);
  }

  itemOnClicked(id: string) {}
}
