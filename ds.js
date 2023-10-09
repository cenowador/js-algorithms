const LinkedList = require('./data-structures/linked-list');

const ds = 'linkedList';

if(ds === 'linkedList'){
    const list = new LinkedList();
    list.add('A');
    list.add('B');
    list.add('C');
    list.add('D');
    list.remove(2);
    list.add('C');
    console.log(list.get(0), list.get(1), list.get(2), list.get(3), list.get(4))
}
