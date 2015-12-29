/**
 * boxes.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 27 Dec 2015
 */

import configManager from "./lib/configManager";
import rendererManager from "./lib/rendererManager";
import stageManager from "./lib/stageManager";
import resizeManager from "./lib/resizeManager";

configManager.init();
rendererManager.init();
stageManager.init();
resizeManager.init();

const config = configManager.get(),
    renderer = rendererManager.get(),
    stage = stageManager.get(),
    loader = new PIXI.loaders.Loader();

loader.add("boxes", "./data/boxes.json").load(onAssetsLoaded);

function onAssetsLoaded(loader, res) {

    const boxes = new PIXI.spine.Spine(res.boxes.spineData);
    boxes.skeleton.setToSetupPose();
    boxes.update(0);
    boxes.autoUpdate = false;

    // create a container for the spine animation and add the animation to it
    const boxesCage = new PIXI.Container();
    boxesCage.addChild(boxes);

    // measure the spine animation and position it inside its container to align it to the origin
    const localRect = boxes.getLocalBounds();
    boxes.position.set(-localRect.x, -localRect.y);

    // now we can scale, position and rotate the container as any other display object
    const scale = Math.min((config.gameDimensions.w * 0.8) / boxesCage.width, (config.gameDimensions.h * 0.8) / boxesCage.height);
    boxesCage.scale.set(scale, scale);
    boxesCage.position.set((config.gameDimensions.w - boxesCage.width) * 0.5, (config.gameDimensions.h - boxesCage.height) * 0.5);

    // add the container to the stage
    stage.addChild(boxesCage);

    // once position and scaled, set the animation to play
    const animations = ["wag", "twist", "coil", "wag2"];
    let animationIndex = 0;

    function switchAnimation() {
        boxes.state.setAnimationByName(0, animations[animationIndex], true);
        animationIndex = animationIndex === animations.length - 1 ? 0 : animationIndex + 1;
    }

    stage.touchstart = switchAnimation;
    stage.click = switchAnimation;

    animate();
    function animate() {
        requestAnimationFrame(animate);

        //boxes.update(0.01666666666667);
        boxes.update(0.005);

        // render the container
        renderer.render(stage);
    }
}
