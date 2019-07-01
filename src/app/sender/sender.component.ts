import { ObserverService } from './../_services/observer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor(
    private observerService: ObserverService
  ) { }

  ngOnInit() {
  }
  setName(value) {
    this.observerService.setData({name: value});
  }
}
