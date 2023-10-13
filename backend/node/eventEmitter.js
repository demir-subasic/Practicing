const EventEmitter = require('events')

const customEmitter = new EventEmitter;

customEmitter.on('response', (name, id) => {
    console.log(`data recieved ,${name}, ${id}`)
})

customEmitter.on('response', () => {
    console.log(`same other logic here `)
})

customEmitter.emit('response', 'demir', 18)