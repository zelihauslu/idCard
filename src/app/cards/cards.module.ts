import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import {MatCardModule} from '@angular/material/card';
import { CardItemComponent } from './card-item/card-item.component';
import { CarComponent } from './car/car.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CardModalComponent } from './card-modal/card-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent,
    CarComponent,
    CardModalComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule

  ]
})
export class CardsModule { }
