const express = require('express');
const app = express();
const jExpress = express.json();
app.use(jExpress);
let nextID = 1;
const grades = {};

app.get('/api/grades', function (req, res) {
  const gradesArray = [];
  for (var o in grades) {
    gradesArray.push(grades[o]);
  }
  res.json(gradesArray);
});

app.delete('/api/grades/:id', function (req, res) {
  const reqId = req.params.id;
  delete grades[reqId];
  res.sendStatus(204);
});

app.post('/api/grades', function (req, res) {
  grades[nextID] = req.body;
  grades[nextID].id = nextID;
  res.status(201).send(grades[nextID++]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
