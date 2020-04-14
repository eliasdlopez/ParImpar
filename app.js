const express = require('express');
const app = express();

var string = "";

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    string += ('<p>' + i + ' Soy Par!' + '</p>')
  } else {
    string += ('<p>' + i + ' Soy Impar!' + '</p>')
  }
}

app.get('/', (req, res) => {

  res.send(string);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
