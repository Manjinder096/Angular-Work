import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: []
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {};

  onSaveData() {
    this.dataStorageService.storeProducts();
  }

  onFetchData() {
    console.log('in header fetch data');
    // this.dataStorageService.fetchProducts();
    this.dataStorageService.fetchProducts().subscribe();
  }

}
