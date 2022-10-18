const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

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

app.listen(3000, () => {
// eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
