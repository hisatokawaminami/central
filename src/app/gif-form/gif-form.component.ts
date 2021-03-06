import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GifService } from '../gif.service';
@Component({
  selector: 'app-gif-form',
  templateUrl: './gif-form.component.html',
  styleUrls: ['./gif-form.component.css'],
  providers: [ GifService ]
})
export class GifFormComponent {
  data: any[]=null;
    constructor(private headlinerGifs: GifService) { }
    getHeadlinerGifs(headliner: string) {
      this.headlinerGifs.getGif(headliner).subscribe(response => {
          this.data = response.json();
      });
    }
}
