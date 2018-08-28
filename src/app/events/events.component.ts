import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from '../models/show.model';
import { ShowService } from '../show.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [ShowService]
})
export class EventsComponent implements OnInit {
  shows: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private showService: ShowService) { }

  ngOnInit() {
    this.shows = this.showService.getShows();
  }

  goToDetailPage(clickedShow) {
    console.log(clickedShow);
    this.router.navigate(['shows', clickedShow.$key]);
  }
}
