import {Trait} from '../Entity.js';

export default class CoinCollector extends Trait {
    constructor() {
        super('coincollector');
        this.onCollect = function() {
        }
    }

    collect() {
        this.onCollect();
    }


}