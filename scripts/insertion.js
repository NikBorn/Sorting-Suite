function insertionSort (array) {

  for (var i = 0; i < array.length; i++) {

    for (var j = i; j >= 0; j--) {
      // console.log("i: ", i, "j: ", j)
      // console.log(array, 'before')

      if (array[j + 1] <  array[j]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

      }

      // console.log(array, 'after')
      // console.log('--------------')
    }
  }
  return array
}





export default insertionSort;
