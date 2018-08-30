import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css'],
  providers: [ ]
})
export class GifListComponent {
  @Input() childData;
  constructor() { }
}
