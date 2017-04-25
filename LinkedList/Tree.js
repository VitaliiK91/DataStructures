'use strict';

const Node = require('./Node');
/**
 * Tree class
 */
function Tree() {
	this.head = null;
	this.tail = null;
	this.size = 0;
};

/**
 * Add to tail
 */
Tree.prototype.add = function(value) {
	// create new Node with given value
	const node = new Node(value);
	// check if tree is empty
	if(!this.head) {
		this.head = node;
	} 
	// check if tree has a tale (tail points to the last element of head)
	if(this.tail) {
		// extend tree
		this.tail.next = node;
	} 
	// set the tale
	this.tail = node;
	
	// increase size
	this.size += 1;
}

/**
 * Remove from tree
 */
Tree.prototype.remove = function(value) {
	let current = this.head;
	let prev = this.head;

	// if value is head
	if(this.head.value === value) {
		// remove form tree
		this.head = this.head.next;
		// decrement size
		this.size -= 1;
	}
	else {
		current = current.next;
		// until tail is reached
		while(current) {
			// if found match
			if(current.value === value) {
				// remove form tree
				prev.next = current.next;
				// decrement size
				this.size -= 1;
				// if found in tail
				if(current === this.tail) {
					this.tail = prev;
				}
			}
			// move to next node
			prev = current;
			current = current.next;
		}
	}
}

/**
 * Reverse tree (i.e. (1->2->3) => (3->2->1))
 */
Tree.prototype.reverse = function() {
	let currNode = this.head;
	let prevNode = null;
	let nextNode = null;

	// tail and head will be swapped
	const tail = this.head;

	// until we rearch end of the tree
	while(currNode) {
		nextNode = currNode.next; // set reference to next
		currNode.next = prevNode; // reverse current next
		prevNode = currNode; // move previous one step
		currNode = nextNode; // move current one step
	}
	//swap tail and head
	this.head = prevNode;
	this.tail = tail;
}

module.exports = Tree;