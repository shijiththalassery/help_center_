const express = require('express');
const app = express();
const Routes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.json());


app.use('/',Routes)


app.listen(9000,()=>{
    console.log(`server is running on the port http://localhost:9000`)
})