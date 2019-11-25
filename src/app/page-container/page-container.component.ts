import { Component, OnInit } from '@angular/core';
import { PollItem } from '../_models/item.model';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {
  pollItems: PollItem[] = [
    {
      id: 1,
      title: 'Table Tennis',
      description: 'Table tennis is good for your health',
      voteCount: 0,
      imageUrl: 'assets/table-tennis.svg'
    },
    {
      id: 2,
      title: 'Sofa',
      description: 'Sofa for relaxation',
      voteCount: 0,
      imageUrl: 'assets/sofa.svg'
    },
    {
      id: 3,
      title: 'Library',
      description: 'Table tennis is good for your health',
      voteCount: 0,
      imageUrl: 'assets/library.svg'
    }
  ];

  constructor() {}

  ngOnInit() {}

  get totalVotes() {
    let total = 0;

    this.pollItems.forEach(i => {
      total += i.voteCount;
    });

    return total;
  }
}
