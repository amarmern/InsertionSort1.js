const Array = [5, 2, 4, 6, 1, 3];


function insertionSort(Array){
  let arr = Array.slice()
  for(let i =1; i < arr.length; i++){
    let j= i -1;
    let temp = arr[i]
    while(j >= 0 && arr[j]> temp){
      arr[j+1] = arr[j];
      j--
    }
    arr[j+1] =temp;
  }
  return arr;
}

console.log(insertionSort(Array));

console.log(Array)
