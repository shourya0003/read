import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GroupOfWordsComponent } from '../group-of-words/group-of-words.component';

@Component({
  selector: 'app-carousel-alphabets',
  standalone: true,
  imports: [GroupOfWordsComponent,CommonModule],
  templateUrl: './carousel-alphabets.component.html',
  styleUrl: './carousel-alphabets.component.scss'
})
export class CarouselAlphabetsComponent {
  data =[
    {
      image:"../assets/a.jpg",
      words:"A".split(" "),
    },
    {
      image:"../assets/b.jpg",
      words:"B".split(" ")
    },
    {
      image:"../assets/c.jpg",
      words:"C".split(" ")
    },
    {
      image:"../assets/d.jpg",
      words:"D".split(" ")
    }
    ]
  }
