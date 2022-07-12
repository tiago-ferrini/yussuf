import { Injectable } from '@angular/core';
import * as Airtable from 'airtable';
@Injectable({
  providedIn: 'root',
})
export class AirtableService {
  base = new Airtable({ apiKey: 'keykmRIKtvV1bLZg4' }).base(
    'appPh2RYtKJSuP02N'
  );
  constructor() {}

  getProducts() {
    return this.base('Product Inventory')
      .select({
        // Selecting the first 3 records in Product Overview:
        // maxRecords: 3,
        view: 'Product Overview',
      })
      .firstPage();
  }
}
