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

const gradesArray = [];
for (var o in grades) {
  gradesArray.push(grades[o]);
}

app.use('/api/grades', function (req, res) {
  res.json(gradesArray);
});

app.listen(3000, () => {
// eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
