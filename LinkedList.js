function Tree() {
	this.head = null;
	this.tail = null;
	this.size = 0;
};

Tree.prototype.add = function(value) {
	const node = new Node(value);
	if(!this.head) {
		this.head = node;
	}
	if(this.tail) {
		this.tail.next = node;
	} 
	this.tail = node;
	
	this.size += 1;
}


function Node(value) {
	this.value = value;
	this.next = null;
}

const tree = new Tree();
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
tree.add(6);

console.log(JSON.stringify(tree));