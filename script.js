const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Login = require("./models/login.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))






main().then(() => {
  console.log("connected to DB");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/snackTruck');

}



let login1 = new Login({
  username: "bhakti",
  password: "1234567891",

});

login1.save().then((res) => {
  console.log(res);
});

//login route

app.get("/logins", async (req, res) => {
  let logins = await Login.find();
  console.log(logins);
  res.render("login.ejs", { logins });
});

app.get("/", (req, res) => {
  // res.send("Hi, i am root");
  res.render("index.ejs");

});

app.listen(8080, () => {
  console.log(`server is listening to port 8080`);
});



