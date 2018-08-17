import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../models/show.model';
@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  @Input() childShowList: Show[];
  @Output() clickSender = new EventEmitter();



  ngOnInit() {
  }

}
