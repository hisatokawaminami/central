import { Component, OnInit } from '@angular/core';
import { Show } from '../models/show.model';
@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  shows: Show[] = [
    new Show('Nirvana', 'Screaming Trees', '8pm', 15),
    new Show('Wild Arms', 'Hillside', '9pm', 7),
  ]
}
