const express = require('express');
const app = express();
const Routes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

// we can configure CORS with specific options
// app.use(cors({
//   origin: '*',  // This allows requests from any origin
// }));

app.use(bodyParser.json());



app.use('/',Routes)


app.listen(9000,()=>{
    console.log(`server is running on the port http://localhost:9000`)
})