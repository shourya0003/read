import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {

  menuListData = [
    {
      icon_url:'../assets/alphabet.jpg',
      menu_name:"Alphabets (A-z)",
      routerlink:'/alphabets',
      level:'Level 0'
    },
    {
      icon_url:'../assets/numbers.jpg',
      menu_name:"Numbers (1-10)",
      routerlink:'/numbers',
      level:'Level 0'
    },
    {
      icon_url:'../assets/spelltheword.jpg',
      menu_name:"Spell the word",
      routerlink:'/spelltheword',
      level:'Level 1'
    },
    {
      icon_url:'../assets/readasentence.jpg',
      menu_name:"Read a sentence",
      routerlink:'/readasentence',
      level:'Level 2'
    }
  ]
}
