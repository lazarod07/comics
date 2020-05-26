import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-villano-details',
  templateUrl: './villano-details.component.html',
  styleUrls: [
    
  ]
})
export class VillanoDetailsComponent implements OnInit {

  villano:any = [];
  imgCasa:string;

  constructor(private _activeRoute: ActivatedRoute, private _heroService:HeroService) {

    this._activeRoute.params.subscribe( params=>{
      //console.log(params['id']);
      this.villano = this._heroService.getVillain(params['id']);
    })


  }

  ngOnInit(): void {
  }

}
