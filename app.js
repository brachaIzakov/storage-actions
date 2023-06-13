

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('./logger');
const app = express();
const port = 3000;
const CONNECTION = process.env.DB_CONNECTION;
dotenv.config();

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(CONNECTION, connectionParams)

    .then(() => {
        logger.info('connect to mongoDB');
    })
    .catch((error) => {
        logger.error(error.message);
    })

const messageRouter = require('./api/routes/websiteRoute');

app.use(bodyParser.json());
app.use('/messages', messageRouter);


app.get('/', (req, res) => {
    res.status(200).send('HELLO ˜')
})

app.get('/', (req, res) => {
    res.status(200).send('HELLO ˜')
})

app.listen(port, () => {
    logger.info(`my app is listening on http://localhost:${port}`);

})
