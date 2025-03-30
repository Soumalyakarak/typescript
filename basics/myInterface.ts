interface users {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface users {
    githubToken: string
}

interface admin extends users {
    role: "admin" | "ta" | "learner"
}

const hitesh: admin = { dbId: 22, email: "h@h.com", userId: 2211,
role: "ta",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "hitesh10", off: 10) => {
    return 10
}
}
hitesh.email = "h@hc.com"
// hitesh.dbId = 33