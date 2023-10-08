function bubblesort(arr){
    let ended = false;
    let start = 0;
    while(!ended){
        if(arr[start+1] < arr[start]){
            const temp = arr[start+1];
            arr[start+1] = arr[start];
            arr[start] = temp;
        }

        start += 1;
        if(start >= arr.length){
            start = 0;
        }

        ended = true;
        for(let i = 0; i < arr.length-1; ++i){
            if(arr[i] > arr[i+1]){
                ended = false;
                break;
            }
        }
    }
    return arr;
}

module.exports = bubblesort;