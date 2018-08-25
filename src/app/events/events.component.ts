import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from '../models/show.model';
import { ShowService } from '../show.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [ShowService]
})
export class EventsComponent implements OnInit {
  shows: Show[];
  constructor(private router: Router, private showService: ShowService) { }

  ngOnInit() {
    this.shows = this.showService.getShows();
  }
  goToDetailPage(clickedShow: Show) {
    this.router.navigate(['shows', clickedShow.tixPrice]);
  };
}
