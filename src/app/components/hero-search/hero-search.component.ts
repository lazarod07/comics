import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerosService, Hero } from '../../services/heros.service';



@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styles: [
  ]
})
export class HeroSearchComponent implements OnInit {

  hero:any = [];
  constructor(  private _activateRoute: ActivatedRoute,  private _heroService: HerosService) {
    this._activateRoute.params.subscribe(params=>{
      // console.log(params['id']);
      this.hero = this._heroService.getHero(params['termino']);
      console.log(this.hero);
    })
   }

  ngOnInit(): void {

  }

}
