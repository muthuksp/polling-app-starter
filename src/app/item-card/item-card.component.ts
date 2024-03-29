import { Component, OnInit, Input } from '@angular/core';
import { PollItem } from '../_models/item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item: PollItem;

  constructor() {}

  ngOnInit() {}

  castVote() {
    this.item.voteCount++;
  }
}
