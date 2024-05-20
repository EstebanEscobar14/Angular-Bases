import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deletedHero?: string;

  public removeLastHero(): void {
    this.deletedHero = this.heroNames.pop()?.toUpperCase();

  }
}
