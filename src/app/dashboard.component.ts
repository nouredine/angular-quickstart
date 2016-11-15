import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(val => this.heroes = val.slice(1, 5));
  }

 gotoDetail(hero: Hero): void {
  let link = ['/totoDtail', hero.id];
  this.router.navigate(link);
}

}

