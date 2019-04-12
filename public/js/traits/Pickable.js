import { Trait} from '../Entity.js';

export default class Pickable extends Trait {
    constructor() {
        super('pickable');
        this.picked = false;
        this.onPicked = function() {
        }
    }

    pick() {
        this.queue(() => this.picked = true);
    }

    update(entity, deltaTime, level) {
        
        if (this.picked) {
 
                this.queue(() => {
                    
                    this.onPicked(this);
                    level.entities.delete(entity);
                
                });
            
        }
    }
}