const {readFileSync, writeFileSync} = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync('./content/resultSync.text',
 `Here is the resultt : ${first}, ${second}`, 
 {flag: 'a'}
)

console.log('done with task')
console.log('starting  the next one')