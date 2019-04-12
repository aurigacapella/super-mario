
export default class TouchScreenState {
    constructor() {

        // Holds the callback functions for a key code
        this.keyMap = new Map();
    }

    addMapping(type, callback) {
        this.keyMap.set(type, callback);
    }

    handleEvent(event) {
        const {type} = event;
        if (!this.keyMap.has(type) ) {
            // Did not have key mapped.
            return;
        }
        event.preventDefault();
        // get callback using type as keyword and then invoke the callback using type as argument
        this.keyMap.get(type)(type);
    }

    listenTo(window) {
        ['mousedown', 'mouseup'].forEach(eventName => {
            window.addEventListener(eventName, event => {
                this.handleEvent(event);
            });
        });
    }
}