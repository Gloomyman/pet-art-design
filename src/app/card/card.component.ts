import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  num = 0;

  @Input()
  imageUrl: string;

  constructor() {
  }

  ngOnInit(): void {

  }

}
