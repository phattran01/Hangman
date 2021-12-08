function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return Number(longerLength - editDistance(longer, shorter)) / Number(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

function runComparison(word1, word2) {

    return similarity(word1, word2);
}

function autoCorrect() {
    var arr = MyArray;
    var nums = [];
    var x = pickedWord;

    for (let i = 1; i <= 370000; i++) {
        var y = arr[i];
        var num = runComparison(x, y);
        nums.push(num);
    }

    let max = nums[0];
    var index;

    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] > max) {
            max = nums[i];
            index = i;
        }
    }

    var answer1 = String(arr[index + 1]);

    return answer1;
}

function bruteForce() {
    var startTime = performance.now();
    word1 = String(pickedWord)
    document.getElementById("bruteForceAlgo").innerHTML = "Brute Force: " + MyArray.includes(pickedWord);
    var auto = autoCorrect();
    document.getElementById('autoCorrect1').innerHTML = 'Autocorrect: ' + auto;
    var endTime = performance.now();
    console.log(`Calling bruteForce took ${endTime - startTime} milliseconds`);
}

function decreaseConstantFactor() {
    var startTime = performance.now();
    var arr = MyArray;
    var temp = [];

    for( let i = 1; i <= arr.length; i++) {
        temp.push(arr[i]);
    }
    var x = String(pickedWord);

    let result = binarySearch(temp, x);

    if (result == -1) {
        document.getElementById("decreaseByConstantFactorAlgo").innerHTML = "Decrease By Constant Factor: false";
    } else {
        document.getElementById("decreaseByConstantFactorAlgo").innerHTML = "Decrease By Constant Factor: true";
    }

    var auto = autoCorrect();
    document.getElementById('autoCorrect2').innerHTML = 'Autocorrect: ' + auto;
    var endTime = performance.now();
    console.log(`Calling Decrease By Constant Factor took ${endTime - startTime} milliseconds`);

}

function binarySearch(arr, x) {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        let res = x.localeCompare(arr[m]);

        // Check if x is present at mid
        if (res == 0)
            return m;

        // If x greater, ignore left half
        if (res > 0)
            l = m + 1;

        // If x is smaller, ignore right half
        else
            r = m - 1;
    }
    return -1;
}

var arr = MyArray;

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search tree class
class BinarySearchTree {
    constructor() {
        // root of a binary search tree
        this.root = null;
    }

    // function to be implemented
    // insert(data)
    // remove(data)


    // Helper function
    // findMinNode()
    // getRootNode()
    // inorder(node)
    // preorder(node)              
    // postorder(node)
    // search(node, data)

    // helper method which creates a new node to
    // be inserted and calls insertNode
    insert(data) {
        // Creating a node and initialising
        // with data
        var newNode = new Node(data);

        // root is null then node will
        // be added to the tree and made root.
        if (this.root === null)
            this.root = newNode;
        else

            // find the correct position in the
            // tree and add the node
            this.insertNode(this.root, newNode);
    }

    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data
    insertNode(node, newNode) {
        // if the data is less than the node
        // data move left of the tree
        if (newNode.data < node.data) {
            // if left is null insert node here
            if (node.left === null)
                node.left = newNode;
            else

                // if left is not null recur until
                // null is found
                this.insertNode(node.left, newNode);
        }

        // if the data is more than the node
        // data move right of the tree
        else {
            // if right is null insert node here
            if (node.right === null)
                node.right = newNode;
            else

                // if right is not null recur until
                // null is found
                this.insertNode(node.right, newNode);
        }
    }

    // helper method that calls the
    // removeNode with a given data
    remove(data) {
        // root is re-initialized with
        // root of a modified tree.
        this.root = this.removeNode(this.root, data);
    }

    // Method to remove node with a
    // given data
    // it recur over the tree to find the
    // data and removes it
    removeNode(node, key) {

        // if the root is null then tree is
        // empty
        if (node === null)
            return null;

        // if data to be delete is less than
        // roots data then move to left subtree
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        // if data to be delete is greater than
        // roots data then move to right subtree
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        // if data is similar to the root's data
        // then delete this node
        else {
            // deleting node with no children
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // deleting node with one children
            if (node.left === null) {
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }

            // Deleting node with two children
            // minimum node of the right subtree
            // is stored in aux
            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }

    }

    // Performs inorder traversal of a tree
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    // Performs preorder traversal of a tree   
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Performs postorder traversal of a tree
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    //  finds the minimum node in tree
    // searching starts from given node
    findMinNode(node) {
        // if left of a node is null
        // then it must be minimum node
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    // returns root of the tree
    getRootNode() {
        return this.root;
    }

    // search for a node with given data
    // search for a node with given data
    search(node, data) {
        // if trees is empty return null
        if (node === null)
            return false;

        // if data is less than node's data
        // move left
        else if (data < node.data)
            return this.search(node.left, data);

        // if data is less than node's data
        // move left
        else if (data > node.data)
            return this.search(node.right, data);

        // if data is equal to the node data
        // return node
        else if (data == node.data) {
            return true;
        }
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// create an object for the BinarySearchTree
function transformConquer() {
    var startTime = performance.now();
    var arr = MyArray;
    var x = String(pickedWord);
    var BST = new BinarySearchTree();

    // Inserting nodes to the BinarySearchTree
    var arr = MyArray; // new empty array
    var nums = [];
    for (let i = 1; i <= arr.length; i++) {
        nums.push(i);
    }
    shuffle(nums);
    let temp = [];

    for (let j = 1; j <= nums.length; j++) {
        temp.push(MyArray[nums[j]]);
    }

    for (let y = 1; y <= temp.length; y++) {
        BST.insert(temp[y])
    }

    var root = BST.getRootNode();
    document.getElementById("transformConq").innerHTML = "Transform and Conquer: " + BST.search(root, x);

    var auto = autoCorrect();
    document.getElementById('autoCorrect3').innerHTML = 'Autocorrect: ' + auto;
    var endTime = performance.now();
    console.log(`Calling Transform and Conquer took ${endTime - startTime} milliseconds`);
}