import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;
  ngDestroy$ = new Subject();

  constructor(private heroService: HeroService, public messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  ngOnDestroy(): void{
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }

  onSelect(hero: Hero): void{
      this.selectedHero = hero;
      this.messageService.add(`Heroes Component: Selected Hero id = ${ hero.id }`);

  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe(heroes => this.heroes = heroes );
  }


}
