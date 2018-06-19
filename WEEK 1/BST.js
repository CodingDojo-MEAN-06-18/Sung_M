function BST() {
    this.root = null;
}

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(val) {
    var root = this.root;

    if(!root) {
        this.root = new Node(val);
        return this;
    }

    var currentNode = root;
    var newNode = new Node(val);

    while(currentNode) {
        if(val < currentNode.value) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                return this;
            }
            else {
                currentNode = currentNode.left;
            }
        }
        else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                return this;
            }
            else {
                currentNode = currentNode.right;
            }
        }
    }
}

BST.prototype.inOrder = function(root) {
    if (root.left) {
        this.inOrder(root.left);
    }
    console.log(root.value);
    if (root.right) {
        this.inOrder(root.right);
    }
}

BST.prototype.postOrder = function(root) {
    if (root.left) {
        this.postOrder(root.left);
    }
    if(root.right) {
        this.postOrder(root.right);
    }
    console.log(root.value);
}

BST.prototype.preOrder = function(root) {
    console.log(root.value);
    
    if(root.left) {
        this.preOrder(root.left);
    }
    if(root.right) {
        this.preOrder(root.right);
    }
}

BST.prototype.depth = function(root) {
    if (!root) {
        return 0;
    }
    var leftDepth = this.depth(root.left);
    var rightDepth = this.depth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
    return this;
}


var first = new BST;
first.insert(40).insert(20).insert(25).insert(50);
first.inOrder(first.root);
first.postOrder(first.root);
first.preOrder(first.root);
first.depth(first.root);
