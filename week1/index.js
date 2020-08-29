const express = require('express'),
  http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
app.use(bodyParser.json());



const dishRouter = require('./ routes/dishRouter')
const leaderRouter = require('./ routes/leaderRouter')
const promoRouter =require('./ routes/promoRouter')


app.use('/dishes', dishRouter);
app.use('/leaderships', leaderRouter);
app.use('/promotions',promoRouter ); 




const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});