import { Component } from '@angular/core';
import { Show } from './models/show.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shows: Show[] = [
    new Show('Nirvana', 'Screaming Trees', '8pm', 15),
  ]
}
