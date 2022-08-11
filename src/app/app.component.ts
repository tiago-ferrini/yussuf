import { Component } from '@angular/core';
import { AirtableService } from './services/airtable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'yussuf';
  records: any[] = [];
  constructor(private readonly airtableService: AirtableService) {
    this.airtableService.getProducts().then((res: any) => (this.records = res));
    setTimeout(() => {
      console.log(this.records);
    }, 1000);
  }
}
