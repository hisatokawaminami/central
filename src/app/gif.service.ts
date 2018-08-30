import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GifService {
  
  constructor(private http: Http) { }

getGif(headliner: string) {
  return this.http.get(`http://api.giphy.com/v1/gifs/search?q=${headliner}&api_key=9gAhgJm26EYkPyUZygntqJ4FfdKBFABD&limit=1`)
}

}
