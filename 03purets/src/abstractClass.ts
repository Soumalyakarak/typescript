abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filler: string,
        public burst: number){}

    abstract getSepia() :void
    getReelTime(): number{
        return 8
    }
}

class InstaGram extends TakePhoto{
    constructor
    (
        public cameraMode: string,
        public filler: string,
        public burst: number,
    ) {
        super(cameraMode,filler,burst)
    }

    getSepia(): void {
        console.log("sepia");
    }
    
}

const hc = new InstaGram("test","Test",2)

hc.getReelTime

