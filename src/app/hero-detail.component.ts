/**
 * Created by htruongduc on 5/22/2017.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        // TODO: study deatail later
        this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id'])).subscribe(hero =>  this.hero = hero);
    }
    goBack(): void {
        this.location.back();
    }
}
