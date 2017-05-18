
let merge = (array1, array2) => {

  let mergedList = [];

  while (array1.length && array2.length) {

    if (array1[0] <= array2[0]) {
      mergedList.push(array1.shift())
    } else {
      mergedList.push(array2.shift())
    }
  }

  while (array1.length) {
    mergedList.push(array1.shift())
  }

  while (array2.length) {
    mergedList.push(array2.shift())
  }

  return mergedList

}

const mergeSort = (array) => {

  let q =  Math.floor((array.length) / 2);
  let right = array.slice(q);
  let left = array.slice(0, q);

  if (right.length > 1) {
    right = mergeSort(right)
  }

  if (left.length > 1 )  {
    left = mergeSort(left)
  }

  return merge(left, right)
}

export default mergeSort;
