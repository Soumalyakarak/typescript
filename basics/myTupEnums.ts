// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type Users = [number, string]

const NewUser: Users = [112, "example@google.com"]

NewUser[1] = "hc.com"
// NewUser.push(true)