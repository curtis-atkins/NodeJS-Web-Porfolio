const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("<h1>Hi. This is my first page</h1>")
})

app.get('/about', (req, res) => {
    res.send({"page": "about page"});
})

app.get('/portfolio', (req, res) => {
    res.send("<h1>Portfolio</h1>")
})

app.get('/contact', (req, res) => {
    res.send(`<h1>Contact</h1>
      <div>
        <img src='/img/vegeta.jpg' />
      </div>`)
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}!`);
})
