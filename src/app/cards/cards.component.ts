import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../models/card';
import { CardService } from '../services/card.service';
import { CardModalComponent } from './card-modal/card-modal.component';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  

  constructor(
    public dialog: MatDialog,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.getCards();
  }

  openAddCardModal(){
    this.dialog.open(CardModalComponent, {
      width: '400px'
    });  
  }

  cards!: Card[];

  getCards(): void{
    this.cardService.getCards()
    .subscribe((res: Card[]) => {
      console.log(res);
      this.cards = res;
    })
  }

}
