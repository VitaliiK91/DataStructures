const Tree = require('./Tree');

const tree = new Tree();
for (let i = 0; i < 10; i++) {
	tree.add(i);
}

tree.remove(3);
console.log(JSON.stringify(tree));

tree.reverse();
console.log(JSON.stringify(tree));

