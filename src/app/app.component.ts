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
    new Show('Wild Arms', 'Hillside', '9pm', 7),
  ]

  selectedShow = null;

  editShow(clickedShow) {
    this.selectedShow = clickedShow;
  }
  finishedEditing() {
    this.selectedShow = null
  }
}
