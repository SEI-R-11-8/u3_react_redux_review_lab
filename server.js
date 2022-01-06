const express = require('express');
const routes = require('./api/routes');
const db = require('./api/db');
const bodyParser = require('body-parser');

const cors = require('cors')
const PORT = process.env.PORT || 3001;

const app = express();

const path = require('path');

app.use(cors())
app.use(bodyParser.json())

app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
      res.sendFile(path.join(`${__dirname}/client/build/index.html`))
    })
  }

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))