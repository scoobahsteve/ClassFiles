const express = require('express');
const app = express();

const helloRouter = express.Router();
const goodbyeRouter = express.Router();

goodbyeRouter.get('/bye', (req, res) => {
  res.status(200).json({msg: 'goodbye world'});
});

helloRouter.use('/bye', goodbyeRouter);

helloRouter.get('/hello', (req, res) => {
  res.status(200).json({msg: 'hello world'});
});

helloRouter.get('/hello/:name', (req, res) => {
  res.status(200).json({msg: 'hello ' + req.params.name});
});

app.get('/api/hello', (req, res) => {
  res.status(200).json({msg: 'hello from app'});
});
app.use('/api', helloRouter);
app.listen(3000, () => console.log('server up'));
