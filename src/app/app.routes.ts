import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { VillanosComponent } from './components/villanos/villanos.component';
import { VillanoDetailsComponent } from './components/villano-details/villano-details.component';



const APP_ROUTE: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'villanos', component: VillanosComponent },
    { path: 'heroes/detalles/:id', component:  HeroDetailsComponent },
    { path: 'villanos/detalles/:id', component:  VillanoDetailsComponent },
    { path: 'search/:busqueda', component:  HeroSearchComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);
