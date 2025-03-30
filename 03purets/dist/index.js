"use strict";
// class User {
//     email: string
//     name: string
//     city: string=""
//     constructor(email: string,name: string) {
//         this.email = email;
//         this.name = name
//     }
// }
class User {
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this._courseCount = 1;
        this.city = "";
        this.userID = userID;
    }
    get courseCount() {
        return this._courseCount;
    }
    // no return type in case of setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("you have not purchased any course yet");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isfamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const somu = new User("s@gmail.com", "somu", "s@2");
// somu.city = "kol"
// console.log(somu.city)
