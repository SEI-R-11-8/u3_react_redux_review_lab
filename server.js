const express = require('express')
const PORT = process.env.PORT || 3001
const cors = require('cors')
const app = express()
const routes = require ('./routes')
const db = require('./db')
const logger = require('morgan')

//  Your Code Here
app.use(express.json())
app.use(cors());
app.use(logger('dev'))
db.on("error", console.error.bind(console, "MongoDB connection error:"))
app.use('/', routes)



// End Your Code Here

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin"
//     );
//     next();
//   });



app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))




// app.use() middleware here ^ ///////////////////




