import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css'],
  providers: [ ]
})
export class GifListComponent implements OnInit {
  @Input() childGifs;

  constructor() { }

  ngOnInit() {
  }

}
