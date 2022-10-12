const express = require("express");
const cors = require("cors");
const app = express();
const port = 4001 || process.env.PORT;
const { add, multi, divide, sub } = require("./localModules");
app.use(cors());

console.log(add(10, 6));
console.log(multi(3, 35));
console.log(divide(100, 50));
console.log(sub(100, 25));

const globalMid = (req, res, next) => {
  console.log("I'm Global Middleware Works For All Routes");
  next();
};

app.use(globalMid);

app.get("/", (req, res) => {
  res.send("Home Route");
  res.end();
});
app.get("/about", (req, res) => {
  res.send("About");
  res.end();
});

app.listen(port, () => {
  console.log(`Connected to Port ${port}✅`);
})
