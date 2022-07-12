import { Component } from '@angular/core';
import { AirtableService } from './services/airtable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'yussuf';
  constructor(private readonly airtableService: AirtableService) {
    console.log();
    this.airtableService.getProducts().then((res: any) => console.log(res));
  }
}
