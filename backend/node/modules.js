const names = require('./modulesName')
console.log(names)

const sayHi = require('./modulesUtils')

const data = require('./alternativeFlavor')
console.log(data)

sayHi('susan')
sayHi(names.peter)
sayHi(names.john)


