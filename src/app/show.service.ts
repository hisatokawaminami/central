import { Injectable } from '@angular/core';
import { Show } from './models/show.model';
import { SHOWS } from './mock';

@Injectable()
export class ShowService {

  constructor() { }
  getShows() {
    return SHOWS;
  }
}
