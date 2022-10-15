const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

const date = new Date();
app.use((req, res, next) => {
  if (
    date.getHours() > 9 &&
    date.getHours() < 17 &&
    date.getDay() > 0 &&
    date.getDay() < 6
  ) {
    next();
  } else {
    res.send(
      "<h1>Sorry .. This web application is only available during Monday to Friday, from 9 to 17</h1>"
    );
  }
});
console.log(date)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.sendFile(__dirname + "/views/home.html"));

app.get("/services", (req, res) =>
  res.sendFile(__dirname + "/views/OurServices.html")
);
app.get("/ContactUs", (req, res) =>
  res.sendFile(__dirname + "/views/ContactUs.html")
);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
