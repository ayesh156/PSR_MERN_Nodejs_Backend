const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3001;
const host = '127.0.0.1';
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://Ayesh531:SEngineer,Mongo@cluster0.hcz0k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }catch(error) {
        console.log('MongoDB Error: ', error);
        
    }
};

connect()

const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`);
})

app.use('/api', router);