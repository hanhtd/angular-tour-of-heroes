import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms'; // <-- NgModel lives here
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent}  from './app.component';
import {HeroesComponent}  from './heroes.component';
import {HeroDetailComponent}  from './hero-detail.component';
import {HeroService} from './hero.service';
import {DashboradComponent} from './dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroSearchComponent} from './hero-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboradComponent,
        HeroSearchComponent,
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
