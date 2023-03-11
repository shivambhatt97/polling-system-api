const express= require('express');
const connectWithDb = require('./config/db');
require('dotenv').config();
const app= express();
const  { PORT } = process.env;

// for swagger documentation
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



connectWithDb();
//regular middlewware
app.use(express.json());
app.use(express.urlencoded({extended:true}));






//use regular routes
app.use('/',require('./routes'));


app.listen(PORT || 8000,(err)=> {
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on ${PORT}`);
});
