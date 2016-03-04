const server = require('real-fast-server');
const router = new server.Router;

router
  .get('/', (req, res) => res.send('Hello World!'))
  .post('/api/test', (req, res) => {
    res.send('Successfully posted' + JSON.stringify(req.body));
  });

const app = server.start(router).listen(3000);
