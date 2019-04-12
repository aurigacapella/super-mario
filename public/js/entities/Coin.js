import Entity, {Trait} from '../Entity.js';
import Pickable from '../traits/Pickable.js';
import {loadSpriteSheet} from '../loaders.js';

export function loadCoin() {
    return loadSpriteSheet('coin')
    .then(createCoinFactory);
}


class Behavior extends Trait {

   

    constructor() {
        super('behavior');
        this.cashed = false;
    }

    collides(us, them) {

        if (them.coincollector && !this.cashed){
            // Done so it wont collect multiple coins for every frame when in collission
            this.cashed = true;
            us.pickable.pick();
            them.coincollector.collect();
        }
    }

}


function createCoinFactory(sprite) {

    const shineAnim = sprite.animations.get('shine');

    function routeAnim(coin) {
        return shineAnim(coin.lifetime);
    }

    function drawCoin(context) {
        sprite.draw(routeAnim(this), context, 0, 0);


    }

    return function createCoin() {
        const coin = new Entity();
        coin.size.set(16, 16);
        coin.offset.y = 0;

        coin.addTrait(new Pickable());
        coin.addTrait(new Behavior());

        coin.draw = drawCoin;

        return coin;
    };
}
