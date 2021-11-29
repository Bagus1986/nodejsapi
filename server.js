const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')

// const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(cors())

//parse application/json
// app.use[bodyParser.urlencoded({extended:true})];
// app.use(bodyParser.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//panggil routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log('server started on port');
});