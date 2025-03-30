"use strict";
class Instagram {
    constructor(cameraMode, filler, burst) {
        this.cameraMode = cameraMode;
        this.filler = filler;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filler, burst) {
        this.cameraMode = cameraMode;
        this.filler = filler;
        this.burst = burst;
    }
    createStory() {
        console.log("story was created");
    }
}
