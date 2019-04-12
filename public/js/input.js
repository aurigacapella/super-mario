import Keyboard from './KeyboardState.js';
import TouchScreen from './TouchScreenState.js';

export function setupKeyboard(mario) {
    const input = new Keyboard();

    input.addMapping('KeyP', keyState => {
        if (keyState) {
            mario.jump.start();
        } else {
            mario.jump.cancel();
        }
    });

    input.addMapping('KeyO', keyState => {
        mario.turbo(keyState);
    });

    input.addMapping('KeyD', keyState => {
        mario.go.dir += keyState ? 1 : -1;
    });

    input.addMapping('KeyA', keyState => {
        mario.go.dir += keyState ? -1 : 1;
    });

    return input;
}
export function setupTouchScreen(mario) {

    const input = new TouchScreen();

    // Mario is constantly running. Super Mario Run like.
    mario.go.dir = 1;
    // Running state
    mario.turbo(1);

    input.addMapping('mousedown', keyState => {
        mario.jump.start();
    });
    input.addMapping('mouseup', keyState => {
        mario.jump.cancel();
    });

    return input;
}
