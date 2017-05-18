import { expect } from 'chai';
import insertionSort from  '../scripts/insertion.js';
import genRanNum from '../scripts/genRanNum.js';
import charactersGen from '../scripts/charactersGen.js'


describe('insertionSort', () => {

  it('should be a function', () => {
    expect(insertionSort).to.be.function
  })

  it('should sort a small array of numbers', () => {
    let smallArray = genRanNum(100)
    let sortedArray = [...smallArray].sort( (a, b) => a - b)

    expect(insertionSort(smallArray)).to.deep.equal(sortedArray)
  })

  it('should sort a small array of letters', () => {
    let smallLetters = charactersGen(100)
    let sortedArray = [...smallLetters].sort()

    expect(insertionSort(smallLetters)).to.deep.equal(sortedArray)
  })

  it('should sort a large array of numbers (17000)(1935ms)', () => {
    let largeArray = genRanNum(16500)
    let sortedArray = [...largeArray].sort( (a, b) => a - b)

    expect(insertionSort(largeArray)).to.deep.equal(sortedArray)
  })

  it('should sort a large array of letters', () => {
    let largeLettersArray = charactersGen(15000)
    let sortedArray = [...largeLettersArray].sort()

    expect(insertionSort(largeLettersArray)).to.deep.equal(sortedArray)
  })

})
