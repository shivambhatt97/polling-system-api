const express= require('express');
const connectWithDb = require('./config/db');
require('dotenv').config();
const app= express();
const  { PORT } = process.env;

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');



connectWithDb();
//regular middlewware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//use swagger
const options = {
    defination:{
        openapi: '3.0.0',
        info: {
            title: 'Polling system api',
            version: '1.0.0'

        },
        servers: [
            {
                api: 'http://localhost:8000/'
            }
        ]
    },
    apis : ['./index.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));




//use regular routes
app.use('/',require('./routes'));


app.listen(PORT || 8000,(err)=> {
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on ${PORT}`);
});
