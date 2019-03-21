import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  data: Observable<any>;

  constructor() { }

  getData() {
    this.data = new Observable(
      observer => {
        setTimeout(() => {
          observer.next(10);
        }, 5000);

        setTimeout(() => {
          observer.next(20);
        }, 10000);

        setTimeout(() => {
          observer.next(30);
        }, 15000);

        setTimeout(() => {
          observer.next({name: 'Amitabh', rating: 9.5});
        }, 20000);
      }
    );
    return this.data;
  }
}
