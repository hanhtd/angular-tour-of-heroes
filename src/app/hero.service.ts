/**
 * Created by htruongduc on 5/22/2017.
 */
import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(
            resolve => {
                // Simulate server latency with 2 second delay
                setTimeout(() => resolve(this.getHeroes()), 2000);
            }
        );
    }
    getHero(id: number): Promise<Hero> {
        // TODO: Overview about typescript
        // TODO: Promise in tyepscript
        // TODO: Arrow operator in typescript
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}
