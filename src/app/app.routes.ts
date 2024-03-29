import { Routes } from '@angular/router';
import { CarouselWordsComponent } from './carousel-words/carousel-words.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { CarouselAlphabetsComponent } from './carousel-alphabets/carousel-alphabets.component';
import { CarouselNumberComponent } from './carousel-number/carousel-number.component';
import { CarouselSingleWordComponent } from './carousel-single-word/carousel-single-word.component';

export const routes: Routes = [
  {
    path:'alphabets',
    component:CarouselAlphabetsComponent
  },
  {
    path:'numbers',
    component:CarouselNumberComponent
  },
  {
    path:'spelltheword',
    component: CarouselSingleWordComponent
  },
  {
    path:'readasentence',
    component: CarouselWordsComponent
  },
  {
    path:"",
    component:MenuListComponent
  }
];
