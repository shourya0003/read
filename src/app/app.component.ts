import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// const fs = require("fs");
// const path = require("path");
import * as OpenAI from 'openai';
import { CardComponent } from './card/card.component';
import { ListnerComponent } from './listner/listner.component';
import { GroupOfWordsComponent } from './group-of-words/group-of-words.component';
import { MenuListComponent } from './menu-list/menu-list.component';
// const OpenAI = require("openai");



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CardComponent,GroupOfWordsComponent,MenuListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
