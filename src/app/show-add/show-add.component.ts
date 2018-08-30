import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Show } from '../models/show.model';
@Component({
  selector: 'app-show-add',
  templateUrl: './show-add.component.html',
  styleUrls: ['./show-add.component.css']
})
export class ShowAddComponent implements OnInit {
  @Output() sendShow = new EventEmitter();

  submitForm(gif: string, date: string, headliner: string, opener: string, showTime: string, tixPrice: number){
    let newShow: Show = new Show(gif, date, headliner, opener, showTime, tixPrice);
    this.sendShow.emit(newShow);
  }
  constructor() { }
  showForm(){

  }
  ngOnInit() {
  }

}
