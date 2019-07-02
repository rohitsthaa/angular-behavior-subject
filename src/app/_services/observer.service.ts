import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {
  private dataSource = new BehaviorSubject<object>({name: 'Rohit Shrestha'});
  data = this.dataSource.asObservable();
  constructor() { }

  setData(data) {
    this.dataSource.next(data);
  }
}
