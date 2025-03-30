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
    protected _courseCount = 1
    city: string=""
    constructor(public email: string,public name: string,private userID: string) {
        this.userID = userID
    }
    
    public get courseCount() : number{
        return  this._courseCount
    }
    
    // no return type in case of setter
    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("you have not purchased any course yet");
        }
        this._courseCount = courseNum
    }
    
}
class SubUser extends User{
    isfamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}
const somu = new User("s@gmail.com","somu","s@2")
// somu.city = "kol"

// console.log(somu.city)