const Tree = require('./Tree');

const tree = new Tree();
for (let i = 0; i < 10; i++) {
	tree.add(i);
}
console.log(JSON.stringify(tree));
