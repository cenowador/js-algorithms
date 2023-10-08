const bubblesort = require('./sort/bubblesort');
const mergesort = require('./sort/mergesort');
const quicksort = require('./sort/quicksort');

const odd = [0, 3, 4, 2, 1, 6, 8, 7, 9];
const even = [0, 3, 4, 2, 1, 6, 8, 7];
const one = [0];
const empty = [];
const algorithm = 'bubblesort';

if(algorithm === 'bubblesort'){
    console.log(bubblesort(odd));
    console.log(bubblesort(even));
    console.log(bubblesort(one));
    console.log(bubblesort(empty));
}
else if(algorithm === 'mergesort'){
    console.log(mergesort(odd));
    console.log(mergesort(even));
    console.log(mergesort(one));
    console.log(mergesort(empty));
}
else if(algorithm === 'quicksort'){
    console.log(quicksort(odd, 0, odd.length-1));
    console.log(quicksort(even, 0, even.length-1));
    console.log(quicksort(one, 0, one.length-1));
    console.log(quicksort(empty, 0, empty.length-1));
}

