import { Component } from '@angular/core';
import { GroupOfWordsComponent } from '../group-of-words/group-of-words.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-words',
  standalone: true,
  imports: [GroupOfWordsComponent,CommonModule],
  templateUrl: './carousel-words.component.html',
  styleUrl: './carousel-words.component.scss'
})
export class CarouselWordsComponent {
  data =[
  {
    image:"../assets/dog2.jpg",
    words:"happy puppy max loves playing with butterflies in the sunshine".split(" "),
  },
  {
    image:"../assets/penguine.jpg",
    words:"In the icy sea, they zoom and zoom, penguins light up every frozen room.".split(" ")
  },
  {
    image:"../assets/cows.jpg",
    words:"Cows graze in fields, big and brown, with gentle eyes and a fluffy crown.".split(" ")
  },
  {
    image:"../assets/cats.jpg",
    words:"In the house, they play and purr, with eyes so bright, they never blurr.".split(" ")
  }
  ]
}
