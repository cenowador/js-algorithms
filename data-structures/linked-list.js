class Node {
    _child = null;
    _value = null;
    constructor(value){
        this._value = value;
    }
    set child(val){
        this._child = val;
    }
    set value(val){
        this._value = val;
    }
    get child(){
        return this._child;
    }
    get value(){
        return this._value;
    }
}

class LinkedList {
    _firstNode = null;
    _size = 0;
    set firstNode(val){
        this._firstNode = val;
    }
    set size(val){
        this._size = val;
    }
    get firstNode(){
        return this._firstNode;
    }
    get size(){
        return this._size;
    }
    node(idx){
        if(!this._firstNode || idx < 0 || idx >= this._size){
            return undefined;
        }
        if(idx === 0){
            return this._firstNode;
        }
        let currentNode = this._firstNode;
        for(let i = 0; i <= idx-1; ++i){
            currentNode = currentNode.child;
        }
        return currentNode;
    }
    add(val) {
        const node = new Node(val);
        if(!this._firstNode){
            this._firstNode = node;
        }
        else{
            const last = this.node(this._size-1);
            last.child = node;
        }
        this._size = this._size+1;
    }
    get(idx){
        return this.node(idx)?.value;
    }
    remove(idx){
        if(idx < 0){
            throw new Error('Invalid index');
        }
        if(idx === 0){
            const child = node(1);
            this._firstNode = null;
            if(child){
                this._firstNode = child;
            }
        }
        const parent = this.node(idx-1);
        const child = this.node(idx+1);
        if(parent){
            parent.child = child;
        }
        this._size -= 1;
    }
}

module.exports = LinkedList;
