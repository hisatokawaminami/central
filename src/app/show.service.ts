import { Injectable } from '@angular/core';
import { Show } from './models/show.model';
import { SHOWS } from './mock';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ShowService {
  shows: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.shows = database.list('shows');
  }
  getShows() {
    return this.shows;
  }
  addShow(newShow: Show) {
    this.shows.push(newShow);

  }
  getShowById(showId: string){
    return this.database.object('/shows/' + showId);

  //  for (var i = 0; i <= SHOWS.length - 1; i++) {
  //    if (SHOWS[i].tixPrice === showId) {
  //      return SHOWS[i];
  //    }
  //  }
 }

 updateShow(localUpdatedShow) {
   var showEntryInFirebase = this.getShowById(localUpdatedShow.$key);
   showEntryInFirebase.update({date: localUpdatedShow.date, headliner: localUpdatedShow.headliner, opener: localUpdatedShow.opener, showTime: localUpdatedShow.showTime, tixPrice: localUpdatedShow.tixPrice});
 }

 deleteShow(localShowToDelete){
   var showEntryInFirebase = this.getShowById(localShowToDelete.$key);
   showEntryInFirebase.remove();
 }
}
