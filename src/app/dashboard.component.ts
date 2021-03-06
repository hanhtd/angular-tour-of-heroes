/**
 * Created by htruongduc on 5/24/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboradComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {
    };

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }
}
