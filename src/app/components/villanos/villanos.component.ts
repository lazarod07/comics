import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from 'src/app/service/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: [
    
  ]
})
export class VillanosComponent implements OnInit {


  villano:Hero[]=[];

  constructor(private _heroService: HeroService, private _router: Router) { }

  ngOnInit(): void {

    this.villano = this._heroService.getVillains();
    // console.log(this.villano);
  }

  verHeroe(id:number){
    this._router.navigate(['villanos/detalles',id]);
  }

}
