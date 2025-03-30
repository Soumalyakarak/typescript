interface Takephoto{
    cameraMode: string
    filler: string
    burst: number
}

interface Story{
    createStory(): void
}

class Instagram implements Takephoto{
    constructor(
    public cameraMode: string,
    public filler: string,
    public burst: number
    ){}
    
}

class Youtube implements Takephoto,Story{
    constructor(
    public cameraMode: string,
    public filler: string,
    public burst: number
    ){}
    
    createStory(): void {
        console.log("story was created")
    }
}

