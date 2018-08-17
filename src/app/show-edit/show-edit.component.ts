import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.css']
})
export class ShowEditComponent implements OnInit {
  @Input() childSelectedShow: Show;
  @Output() clickedDone = new EventEmitter;

  finishedEditing() {
    this.clickedDone.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
