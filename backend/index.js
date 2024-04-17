const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/routes');
const http = require('http');
const socketIo = require('socket.io'); // Add this line
const faker = require('faker');
const carcontroller=require('./controller/carContoller');
const httpProxy = require('http-proxy');
const app = express();
const port = 3000;

const proxy=httpProxy.createProxyServer();


let entities = [];

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST','PUT','DELETE'],
  credentials:true
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', carRoutes);

const server = http.createServer(app); // Create HTTP server
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST','PUT','DELETE']
  }
});


const addEntityPeriodically = () => {
  setInterval(() => {
    carcontroller.addCarToList();
    io.emit('newEntity');
  }, 5000); // Change to your desired interval in milliseconds
};



//addEntityPeriodically();

server.listen(port, () => {
  console.log(`Car Management server is running at http://localhost:${port}`);
});





