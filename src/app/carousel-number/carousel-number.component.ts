import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GroupOfWordsComponent } from '../group-of-words/group-of-words.component';

@Component({
  selector: 'app-carousel-number',
  standalone: true,
  imports: [GroupOfWordsComponent,CommonModule],
  templateUrl: './carousel-number.component.html',
  styleUrl: './carousel-number.component.scss'
})
export class CarouselNumberComponent {
  data =[
    {
      image:"../assets/1.jpg",
      words:"1".split(" "),
    },
    {
      image:"../assets/2.jpg",
      words:"2".split(" ")
    },
    {
      image:"../assets/3.jpg",
      words:"3".split(" ")
    }
    ]
  }
