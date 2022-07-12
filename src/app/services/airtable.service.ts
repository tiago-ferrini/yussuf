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
    this.base('Product Inventory')
      .select({
        // Selecting the first 3 records in Product Overview:
        maxRecords: 3,
        view: 'Product Overview',
      })
      .eachPage(
        (records: any, fetchNextPage: any) => {
          // This function (`page`) will get called for each page of records.

          records.forEach((record: any) => {
            console.log('Retrieved', record.get('Product ID'));
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        (err: any) => {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }
}
