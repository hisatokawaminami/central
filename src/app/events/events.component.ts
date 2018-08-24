import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  shows: Show[] = [
    new Show('8.20', 'Nirvana', 'Screaming Trees', '8pm', 15),
    new Show('8.21', 'Wild Arms', 'Hillside', '9pm', 7),
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
