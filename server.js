const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('<h1>Helloooe</h1>')
  
})


app.get('/',  (req, res) => {
	res.send("testing test");
});

app.listen(3000);