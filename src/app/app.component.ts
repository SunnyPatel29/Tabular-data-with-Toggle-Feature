import { Component } from '@angular/core';
import {products} from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'app works!';
  private gridData: any[] = products;
   public columns: string[] = [
      "ProductID", "ProductName", "SupplierID","CategoryID"
    ];

    public hiddenColumns: string[] = [];

    public restoreColumns(): void {
        this.hiddenColumns = [];
    }

    public hideColumn(field: string): void {
        this.hiddenColumns.push(field);
    }
}
