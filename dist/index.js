// const Main = require('./node.dev');
const Main = require('./node.min');

console.log(Main.version)

const main = new Main('long');
main.echoName();
main.testSleep();


