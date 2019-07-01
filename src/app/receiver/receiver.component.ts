import { ObserverService } from './../_services/observer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  recievedData: any;
  constructor(
    private observerService: ObserverService
  ) { }

  ngOnInit() {
    this.observerService.data.subscribe(
      response => {
        this.recievedData = response;
      });
  }

}
