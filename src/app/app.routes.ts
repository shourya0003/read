import { Routes } from '@angular/router';
import { CarouselWordsComponent } from './carousel-words/carousel-words.component';
import { MenuListComponent } from './menu-list/menu-list.component';

export const routes: Routes = [
  {
    path:'spelltheword',
    component: CarouselWordsComponent
  },
  {
    path:"",
    component:MenuListComponent
  }
];
