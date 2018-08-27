import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from '../models/show.model';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ShowService]
})
export class AdminComponent implements OnInit {

  constructor(private showService: ShowService) { }

  ngOnInit() {
  }
submitForm(date: string, headliner: string, opener: string, showTime: string, tixPrice: number) {
  var newShow: Show = new Show (date, headliner, opener, showTime, tixPrice);
  console.log(newShow);
  this.showService.addShow(newShow);
}
}
