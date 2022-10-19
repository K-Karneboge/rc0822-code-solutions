const express = require('express');
const app = express();
const jExpress = express.json();
const data = require('./data.json');
const notes = data.notes;
const fs = require('fs');
let nextId = data.nextId;
app.use(jExpress);

app.get('/api/notes/:id', function (req, res) {
  const reqId = req.params.id;
  if (notes[reqId] === undefined) {
    res.sendStatus(404);
  } else {
    res.send(notes[reqId]);
  }
});

app.get('/api/notes/', function (req, res) {
  const notesArray = [];
  for (var o in notes) {
    notesArray.push(notes[o]);
  }
  res.json(notesArray);
});

app.delete('/api/notes/:id', function (req, res) {
  const reqId = req.params.id;
  if (Number.isInteger(Number(reqId)) === false || reqId < 0) {
    const error = { error: 'id must be a positive integer' };
    res.status(400).json(error);
  } else if (notes[reqId] === undefined) {
    const error = { error: `cannot find note with id ${reqId}` };
    res.status(400).json(error);
  } else {
    delete notes[reqId];
    const dataJS = JSON.stringify(data);
    fs.writeFile('./data.json', dataJS, err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'an unknown error has occured' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.post('/api/notes', function (req, res) {
  if (req.body.content === undefined) {
    const error = { error: 'content is a required field' };
    res.status(400).json(error);
  } else {
    notes[nextId] = req.body;
    notes[nextId].id = nextId;
    const placeholder = nextId;
    nextId++;
    const dataJS = JSON.stringify(data);
    fs.writeFile('./data.json', dataJS, err => {
      if (err) {
        console.error(err.stack);
        res.status(500).send({ error: 'an unknown error has occured' });
      } else {
        res.status(201).send(notes[placeholder]);
      }
    });
  }
});

// There are 5 outcomes invalid id 400, no content 400, no matching id 404, error writing json 500, success 200.
app.put('/api/notes/:id', function (req, res) {
  const reqId = req.params.id;
  if (Number.isInteger(Number(reqId)) === false || reqId < 0) {
    const errInt = { error: 'id must be a positive integer' };
    res.status(400).json(errInt);
  } else if (req.body.content === undefined) {
    const errCont = { error: 'content is a required field' };
    res.status(400).json(errCont);
  } else if (notes[reqId] === undefined) {
    const errId = { error: `cannot find note with id ${reqId}` };
    res.status(404).json(errId);
  } else {
    notes[reqId].content = req.body.content;
    const dataJS = JSON.stringify(data);
    fs.writeFile('./data.json', dataJS, err => {
      if (err) {
        console.error(err.stack);
        res.status(500).send({ error: 'an unknown error has occured' });
      } else {
        res.status(200).send(notes[reqId]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
