const http = require('http');
const port = 5000;
const data = {
  Name: 'Anshu',
  LastName: 'Kumari',
  Age: 23,
  city: 'Bagodar'
}
const jsonData = JSON.stringify(data);

const server = http.createServer((req, res) => {
  res.write(`<h1> Hii Welcome to server </h1>`);
  res.write(jsonData);
  res.end();
})


server.listen(port, () => {
  console.log(`Connected to port ${port}✅`);
})