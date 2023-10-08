function mergesort(arr = []){
    if(arr.length <= 1){
        return arr;
    }

    const merged = [];
    const left = mergesort(arr.slice(0, Math.ceil(arr.length/2)));
    const right = mergesort(arr.slice(Math.ceil(arr.length/2), arr.length));
    let leftIdx = 0;
    let rightIdx = 0;
    while(leftIdx < left.length && rightIdx < right.length){
        if(left[leftIdx] <= right[rightIdx]){
            merged.push(left[leftIdx]);
            leftIdx += 1;
        }
        else{
            merged.push(right[rightIdx]);
            rightIdx += 1;
        }
    }
    while(leftIdx < left.length){
        merged.push(left[leftIdx]);
        leftIdx += 1;
    }
    while(rightIdx < right.length){
        merged.push(right[rightIdx]);
            rightIdx += 1;
    }

    return merged;
}

module.exports = mergesort;
