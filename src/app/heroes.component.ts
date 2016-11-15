import { Component,OnInit } from '@angular/core';
import '../../public/css/styles.css';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],

})
export class HeroesComponent  implements OnInit{
  // heroes = HEROES;

  heroes: Hero[];

  selectedHero: Hero;

  

  constructor(
  private router: Router,
  private heroService: HeroService) {}//heroService, identifies it as a HeroService injection site.
  
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }  


  getHeroes(): void {
    this.heroService.getHeroes().then(Val => this.heroes = Val);
  }  

  ngOnInit(): void {
    this.getHeroes();
    }

  gotoDetail(): void {
    this.router.navigate(['/totoDtail', this.selectedHero.id]);
  } 


  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService
    .create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;   
    });
}


delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}

   

}







/*********************

Part 1 

hero: Hero = {
  id: 1,
  name: 'Windstorm'
};


*************************/