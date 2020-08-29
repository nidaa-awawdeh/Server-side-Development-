
const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
 
.all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

leaderRouter.route('/')
    .get( (req, res, next) => {
        res.end(' Nidaa will be leader in code someday');

    })
leaderRouter.route('/')
    .post( (req, res, next) => {
        res.end('will become the leader :' + req.body.name + req.body.description)
    })
 
leaderRouter.route('/')
    .put( (req, res, next) => {
        res.send('Got a PUT request at /leader')
    })
leaderRouter.route('/')
    .delete((req, res, next) => {
        res.end('Deleating leader :' + req.param.leaderId)
    })


leaderRouter.route('/:leadershipsId')
    .get( (req, res, next) => {
        res.end(' Nidaa will be leader in code someday');

    })

leaderRouter.route('/:leadershipsId')
    .post( (req, res, next) => {
        res.end('will become the leadership :' + req.body.name + req.body.description)
    })

leaderRouter.route('/:leadershipsId')
    .put( (req, res, next) => {
        res.send('Got a PUT request at /leadership')
    })
leaderRouter.route('/:leadershipsId')
    .delete( (req, res, next) => {
        res.end('Deleating leadership :' + req.param.leaderId)
    });

module.exports = leaderRouter;

    





