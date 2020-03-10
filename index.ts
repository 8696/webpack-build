import A from './src/A';

const p = require('./package.json');

A.v = p.version;

async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
}

(async function () {
  for (let i = 0; i < 10; i++) {
    await sleep();
    console.log(i);
  }
}());
module.exports = A;
