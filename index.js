const Blockchain = require('./Blockchain');
const Block = require('./Block');

const myChain = new Blockchain();

myChain.addBlock(new Block(1, Date.now().toString(), { amount: 50 }));
myChain.addBlock(new Block(2, Date.now().toString(), { amount: 20 }));

console.log(JSON.stringify(myChain, null, 2));
