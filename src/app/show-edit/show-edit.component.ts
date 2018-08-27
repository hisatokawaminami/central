import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../models/show.model';
import { ShowService } from '..//show.service';

@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.css'],
  providers: [ShowService]
})
export class ShowEditComponent implements OnInit {
  @Input() selectedShow;
  @Output() clickedDone = new EventEmitter;

  finishedEditing() {
    this.clickedDone.emit();
  }
  constructor(private showService: ShowService ) { }

  ngOnInit() {
  }

  beginUpdatingShow(showToUpdate){
    this.showService.updateShow(showToUpdate);
  }
}
