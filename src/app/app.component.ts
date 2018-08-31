import { Component } from '@angular/core';
import { Show } from './models/show.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  masterShowList: Show[] = [

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
