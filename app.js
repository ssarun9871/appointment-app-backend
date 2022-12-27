const express = require('express');
const app = express();
const model = require('./models/users');


const sequelize = require('./util/database');


model.sequelize.sync().then(result=>{
    app.listen(3000);
})
.catch(err=>{console.log(err)});