import { Routes } from '@angular/router';
import { CarouselWordsComponent } from './carousel-words/carousel-words.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { CarouselAlphabetsComponent } from './carousel-alphabets/carousel-alphabets.component';

export const routes: Routes = [
  {
    path:'alphabets',
    component:CarouselAlphabetsComponent
  },
  {
    path:'spelltheword',
    component: CarouselWordsComponent
  },
  {
    path:"",
    component:MenuListComponent
  }
];
