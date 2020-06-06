import { Component, OnInit, Input } from '@angular/core';

import { Fund } from '../shared/fund'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['../styles/main.scss', './card.component.scss']
})
export class CardComponent implements OnInit {

    @Input()
    fund: Fund

  constructor(
  ) { }

  ngOnInit(): void {
      console.log('yo');
      
  }

}
