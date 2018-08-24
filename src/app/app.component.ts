import { Component } from '@angular/core';
import { Show } from './models/show.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SEATTLE SOUND';
  masterShowList: Show[] = [
    new Show('8.20', 'Nirvana', 'Screaming Trees', '8pm', 15),
    new Show('8.21', 'Wild Arms', 'Hillside', '9pm', 7),
  ]

  selectedShow = null;
  addNewShow = null;
  editShow(clickedShow) {
    this.selectedShow = clickedShow;
  }
  finishedEditing() {
    this.selectedShow = null
  }
  addShow(newShow: Show){
    this.masterShowList.push(newShow);
  }
  finishedAdding() {
    this.addNewShow = null;
  }
}
