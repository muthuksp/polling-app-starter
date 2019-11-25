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
      imageUrl:
        'https://contents.mediadecathlon.com/p1328382/460x460/sq/ft_950_indoor_fftt-approved_club_table_tennis_table_-_blue_artengo_8279563_1328382.jpg?k=8c8bca02b0be76fae09518a19d3f308d'
    },
    {
      id: 2,
      title: 'Sofa',
      description: 'Sofa for relaxation',
      voteCount: 0,
      imageUrl:
        'https://contents.mediadecathlon.com/p1328382/460x460/sq/ft_950_indoor_fftt-approved_club_table_tennis_table_-_blue_artengo_8279563_1328382.jpg?k=8c8bca02b0be76fae09518a19d3f308d'
    },
    {
      id: 3,
      title: 'Library',
      description: 'Table tennis is good for your health',
      voteCount: 0,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/De_La_Salle_College_of_Saint_Benilde_Library.jpg/800px-De_La_Salle_College_of_Saint_Benilde_Library.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
