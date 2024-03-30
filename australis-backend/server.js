// require('dotenv').config();
const express = require('express');
const server=express()
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middlewares/errorHandler');
const cors=require('cors');

connectDb();
const app = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:false}));


const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', require('./routes'));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
