import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GroupOfWordsComponent } from '../group-of-words/group-of-words.component';

@Component({
  selector: 'app-carousel-single-word',
  standalone: true,
  imports: [GroupOfWordsComponent,CommonModule],
  templateUrl: './carousel-single-word.component.html',
  styleUrl: './carousel-single-word.component.scss'
})
export class CarouselSingleWordComponent {
  data =[
    {
      image:"../assets/Default_apple_3.jpg",
      words:"A P P L E  Apple".split(" "),
    },
    {
      image:"../assets/Default_bird_4.jpg",
      words:"B I R D  Bird".split(" ")
    },
    {
      image:"../assets/Default_car_0.jpg",
      words:"C A R Car".split(" ")
    },
    {
      image:"../assets/Default_dog_1.jpg",
      words:"D O G Dog".split(" ")
    },
    {
      image:"../assets/elephant.jpg",
      words:"E L E P H A N T Elephant".split(" ")
    }
    ]
}
