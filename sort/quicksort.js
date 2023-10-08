function partition(arr, start, end){
    let i = start-1;
    const pivot = arr[end];

    for(let j = start; j <= end-1; ++j){
        if(arr[j] < pivot){
            i += 1;
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    i += 1;
    let temp = arr[end];
    arr[end] = arr[i];
    arr[i] = temp;

    return i;
}

function quicksort(arr, start, end){
    if(end <= start){
        return arr;
    }

    const pivot = partition(arr, start, end);
    quicksort(arr, start, pivot-1);
    quicksort(arr, pivot+1, end);

    return arr;
}

module.exports = quicksort;
