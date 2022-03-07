const express = require("express");
const path = require("path");

const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server);
app.use(express.static(path.join(__dirname + "/public")));
// Socket 
io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})

server.listen(4000);