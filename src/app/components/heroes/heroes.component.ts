import { Component, OnInit } from '@angular/core';
import { HerosService, Hero } from '../../services/heros.service'
// Para el boton esto se hace de ultimo
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  
  //hero:any[] = [];
  hero:Hero[] = [];
  constructor(private _heroService : HerosService,
              private _router: Router) {
    //  console.log('constructor');
   }
  
  ngOnInit(): void {
    this.hero = this._heroService.getHeros();
    // console.log(this.hero);
  }
  verHeroe( idx:number){
   this._router.navigate(['/heroe',idx])
  }

}
