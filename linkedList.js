class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}


class LinkedList{
    constructor() {
        this.head = null
    }

    append(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            return
        }
        let current = this.head
        while(current.next) {
            current = current.next
        }
        current.next = newNode
    }

    printList() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next
        }
    }

    length() {
        let count = 0
        let current = this.head
        while(current) {
            current = current.next
            count++
        }
        return count
    }

    insertInStart(data) {
        let newNode = new Node(data)
        newNode.next = this.head;
        this.head = newNode
    }

    insertInBetween(data, position) {
        let newNode = new Node(data)

        if(position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return
        }

        let current = this.head
        let index = 0

        while (current !== null && index < position -1) {
            current = current.next;
            index++
        }

        if(current === null) {
            console.log("Position out of bounds");
            return
        }

        newNode.next = current.next
        current.next = newNode
    }

    deleteNode(data) {
        if(!this.head) {
            console.log("List is empty");
        }

        let current = this.head
        let prev = null

        while (current && current.data !== data) {
            prev = current;
            current = current.next;
        }

        if (current === null) {
            console.log("value not found");
        }

        prev.next = current.next
    }

    foundPosition(data) {
        if(this.head.data === data) {
            return 1;
        }

        let current = this.head
        let count = 1;

        while(current) {
            if(current.data === data) {
                console.log(`position found in ${count}`);
                return
            }
            current = current.next
            count++
        }

        return -1
    }


    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        

    }
}

const list = new LinkedList()
list.append(10)
list.append(20)
list.append(30)
// console.log(list.length());
// list.insertInStart(5);
// list.insertInBetween(15, 2)
// list.deleteNode(20)
list.foundPosition(20)
list.printList()

