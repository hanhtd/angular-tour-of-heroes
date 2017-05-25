/**
 * Created by htruongduc on 5/25/2017.
 */
import {NgModule}      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroesComponent}  from './heroes.component';
import {HeroDetailComponent}  from './hero-detail.component';
import {DashboradComponent} from './dashboard.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboradComponent},
    {path: 'details/:id', component: HeroDetailComponent},
    {path: 'heroes', component: HeroesComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
