const {readFileSync, writeFileSync, write, writeFile} = require('fs')


const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync('./content/resultSync.text',
 `Here is the result : ${first}, ${second}`, 
 {flag: 'a'}
)