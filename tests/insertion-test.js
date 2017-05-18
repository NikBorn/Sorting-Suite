import { expect } from 'chai';
import insertionSort from  '../scripts/insertion.js';
import genRanNum from '../scripts/genRanNum.js'

// import genRanNum from '../scripts/genRanNum.js';
// import charGen from '../scripts/charGen.js';


describe('insertionSort', () => {

it('should be a function', () => {
  expect(insertionSort).to.be.function
})

it('should sort a small array of numbers', () => {
  let smallArray = genRanNum(100)
  let sortedArray = [...smallArray].sort( (a, b) => a -b)
  expect(insertionSort(smallArray)).to.deep.equal(sortedArray)
})

it('should sort a small array of letters', () => {
  let smallLetters = ['z', 'f', 'd', 'r', 'g', 't', 'h']
  expect(insertionSort(smallLetters)).to.deep.equal(['d','f', 'g', 'h', 'r', 't', 'z'])
})

// 
// it('should sort an array containing negative numbers' () => {
//
// })

it('should sort a large array of numbers', () => {
  let largeArray = genRanNum(5000)
  let sortedArray = [...largeArray].sort( (a, b) => a -b)
  expect(insertionSort(largeArray)).to.deep.equal(sortedArray)
})

//
// it('should sort a large array of letters' () => {
//
// }))







})
