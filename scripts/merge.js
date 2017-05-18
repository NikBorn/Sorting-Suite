
  var merge = (array1, array2) => {
  var mergedList = [];


   while (array1.length && array2.length) {


      if (array1[0] <= array2[0]) {
        mergedList.push(array1.shift())
        console.log('2', array2)
      }

      else

      {
        mergedList.push(array2.shift())
        console.log('1', array1)
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


let mergeSort = (array) => {
  let q =  Math.floor((array.length) / 2);
  var right = array.slice(q);
  var left = array.slice(0, q);


  console.log('right', right)
  console.log('left', left)
  console.log('------------')

  // if (array.length === 1) {
  //   console.log('time to merge')
  //   merge(left, right)
  // }

  if (right.length > 1) {
    right = mergeSort(right)
      }

  if (left.length > 1 )  {
    left = mergeSort(left)
    }
      return merge(left, right)

  }



console.log(mergeSort(unsortedArray));

export default merge.js;
