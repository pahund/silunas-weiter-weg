/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 27 Dec 2015
 */

import makeConfig from "./setup/makeConfig";
import makeRenderer from "./setup/makeRenderer";
import makeStage from "./setup/makeStage";
import makeStore from "./setup/makeStore";
import resizeManager from "./game/resizeManager";
import spriteManager from "./game/spriteManager";
import update from "./actions/update";
import reducers from "./reducers";

const config = makeConfig(),
    renderer = makeRenderer({ config }),
    stage = makeStage(),
    store = makeStore({ config, reducers });

resizeManager.init({ config, stage, renderer });
spriteManager.init({ store, stage });

(function animate() {
    requestAnimationFrame(animate);

    const state = store.getState();
    Object.keys(state.entity).forEach(entity => store.dispatch(update(entity)));

    spriteManager.update();

    renderer.render(stage);
}());


