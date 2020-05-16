import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerosService } from '../../services/heros.service';


@Component({
  selector: 'app-hero-detalis',
  templateUrl: './hero-detalis.component.html',
  styles: [
  ]
})
export class HeroDetalisComponent implements OnInit {

  hero:any = [];
  imgCasa:string;

  constructor(private _activateRoute: ActivatedRoute, private _heroService: HerosService) {
  /*Esto regres un observador es como especia e una promesa se que aun no hemos visto esa parte pero por ahora 
    tomemos esto por dogma de fe, que debemos hacer en este caso simplemente suscribirnos a ese observador 
    esto se muestra como ejemplo siempre regresa un string 
   */
    this._activateRoute.params.subscribe(params=>{
      // console.log(params['id']);
      this.hero = this._heroService.getHero(params['id']);
      if(this.hero.casa == 'DC'){
        this.imgCasa = '../../../assets/img/dc.jfif';
      }else{
        this.imgCasa = '../../../assets/img/marvel.png';
      }
    })
   }

  ngOnInit(): void {
    
  }

}
