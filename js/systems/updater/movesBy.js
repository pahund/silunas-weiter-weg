/**
 * movesBy.js
 *
 * Updates the coordinates of sprites that are attached to entities with the “movesBy” component.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import deepFreeze from "deep-freeze";
import updatePosition from "./util/updatePosition";
import { getByType } from "../../math/easing";

export default (prevComponent, spriteComponent, timeDelta) => {
    let { velocity, speed, elapsed, startPosition, easing } = prevComponent,
        { position } = spriteComponent;

    easing = getByType(easing);

    if (!startPosition) {
        startPosition = position.clone();
    }

    [ position, elapsed ] = updatePosition(velocity, speed, timeDelta, elapsed, startPosition, easing);

    return [
        elapsed < velocity.length ? deepFreeze({
            ...prevComponent,
            elapsed,
            startPosition
        }) : undefined,
        deepFreeze({
            ...spriteComponent,
            position
        })
    ];
}

