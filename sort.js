const bubbleSort = require('./sort/bubble-sort');
const mergeSort = require('./sort/merge-sort');
const quickSort = require('./sort/quick-sort');

const odd = [0, 3, 4, 2, 1, 6, 8, 7, 9];
const even = [0, 3, 4, 2, 1, 6, 8, 7];
const one = [0];
const empty = [];
const algorithm = 'bubbleSort';

if(algorithm === 'bubbleSort'){
    console.log(bubbleSort(odd));
    console.log(bubbleSort(even));
    console.log(bubbleSort(one));
    console.log(bubbleSort(empty));
}
else if(algorithm === 'mergeSort'){
    console.log(mergeSort(odd));
    console.log(mergeSort(even));
    console.log(mergeSort(one));
    console.log(mergeSort(empty));
}
else if(algorithm === 'quickSort'){
    console.log(quickSort(odd, 0, odd.length-1));
    console.log(quickSort(even, 0, even.length-1));
    console.log(quickSort(one, 0, one.length-1));
    console.log(quickSort(empty, 0, empty.length-1));
}

