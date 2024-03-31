const { io } = require('socket.io-client')
const dotenv = require('dotenv')
dotenv.config()

const { SERVER } = process.env;
const sio = io(SERVER)
sio.on('connect', () => {
    console.log('Connected to server')
})

sio.on('sync', (data) => {
    console.log(data)
})
