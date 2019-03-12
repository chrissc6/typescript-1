class User{
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    isReview: boolean;
    isAdmin: boolean;
    active: boolean;
    
    constructor() {

    }
}

// var xuser: User = new User();
let xuser: User = new User();

xuser.id = 0;
xuser.username = "userxu";
xuser.password = "userxp";
xuser.firstname = "userxf";
xuser.lastname = "userxl";
xuser.phone = "513-555-5523";
xuser.email = "userx@info.com";
xuser.isReview = true;
xuser.isAdmin = true;
xuser.active = true;

console.log(xuser);