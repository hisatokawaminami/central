import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../models/show.model';
import { ShowService } from '../show.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
  providers: [ShowService]
})
export class ShowListComponent implements OnInit {
  @Input() childShowList: Show[];
  @Output() clickSender = new EventEmitter();

  shows: Show[];

  constructor(private router: Router, private showService: ShowService) {}

editShow(showToEdit: Show) {
  this.clickSender.emit(showToEdit);
}

  ngOnInit() {
    // this.shows = this.showService.getShows();
  }

}
