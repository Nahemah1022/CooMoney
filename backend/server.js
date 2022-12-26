// const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const dbConnect = require('./database/dbConnect');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

let app = express();

//-------------
// dbconnect
dbConnect();

//-------------
// setup CORS
const corsOption = {
    // origin:[
    //     "https://luffy.ee.ncku.edu.tw",
    // ],
    credentials: true,
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: ['Accept', 'Authorization', 'Content-Type', 'X-Requested-With', 'Range']
}

app.use(cors(corsOption));

// ------------
// setup request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./routes/userRoutes')
const projectRoutes = require('./routes/projectRoutes')
const clubRoutes = require('./routes/clubRoutes')
const revenueRoutes = require('./routes/revenueRoutes')
app.use('/api/v1/project', projectRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/club', clubRoutes);
app.use('/api/v1/revenue', revenueRoutes);

// ------------
//API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// ------------
// error middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        data: {}
    })
})

//-------------
// setup server
let PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`listening on ${PORT}...`));
