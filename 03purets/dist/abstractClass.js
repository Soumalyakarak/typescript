"use strict";
class TakePhoto {
    constructor(cameraMode, filler, burst) {
        this.cameraMode = cameraMode;
        this.filler = filler;
        this.burst = burst;
    }
    getReelTime() {
        return 8;
    }
}
class InstaGram extends TakePhoto {
    constructor(cameraMode, filler, burst) {
        super(cameraMode, filler, burst);
        this.cameraMode = cameraMode;
        this.filler = filler;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
const hc = new InstaGram("test", "Test", 2);
hc.getReelTime;
