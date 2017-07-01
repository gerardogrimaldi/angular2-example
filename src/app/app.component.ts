import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroesSlowly();
  }
  constructor(private heroService: HeroService) { }

  title = 'Ejemplo pendorcho';
  heroes: Hero[];
  selectedHero: Hero;
  getHeroesSlowly(): void {
    this.heroService.getHeroes()
      .then(heroes => {
        return this.heroes = heroes;
      });
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
