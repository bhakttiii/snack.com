const mongoose = require("mongoose");
const Login = require("./models/login.js");


main().then(() => {
    console.log("connected to DB");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/snackTruck');

}



let allLogins = [
    {
        username: "bhakti",
        password: "1234567891",
    },

    {
        username: "rishi",
        password: "1238787893",
    },

    {
        username: "bhakti",
        password: "6785430912",
    },

    {
        username: "bhakti",
        password: "8906543216",
    },
]
Login.insertMany(allLogins);

