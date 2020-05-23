import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  
  hero: any[] = [];
  busqueda: string;
  constructor( private _heroService:HeroService,
               private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe( params=>{
      this.busqueda = params['busqueda'];
      this.hero = this._heroService.buscarHeroe(params['busqueda']);
    })
  }
}
