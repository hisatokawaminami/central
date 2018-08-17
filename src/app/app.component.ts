import { Component } from '@angular/core';
import { Show } from './models/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shows: Show[] = [
    new Show(8.16, 'Nirvana', 'Screaming Trees', '8pm', 15),
  ];
}
