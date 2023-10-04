const names = require('./modulesName')
console.log(names)

const sayHi = require('./modulesUtils')

sayHi('susan')
sayHi(names.peter)
sayHi(names.john)


