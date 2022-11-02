import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  ngDestroy$ = new Subject();


  constructor(private heroService: HeroService) { }

  ngOnInit(): void { this.getHeroes()}

  ngOnDestroy(): void{
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .pipe(takeUntil(this.ngDestroy$))
    .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

}
