import { expect } from 'chai';
import mergeSort from  '../scripts/merge.js';
import genRanNum from '../scripts/genRanNum.js';
import charactersGen from '../scripts/charactersGen.js';


describe('mergeSort', () => {

  it('should be a function', () => {
    expect(mergeSort).to.be.function
  })

  it('should sort a small array of numbers', () => {
    let smallArray = genRanNum(100)
    let sortedArray = [...smallArray].sort( (a, b) => a - b)

    expect(mergeSort(smallArray)).to.deep.equal(sortedArray)
  })

  it('should sort a small array of letters', () => {
    let smallLetters = charactersGen(100)
    let sortedArray = [...smallLetters].sort()

    expect(mergeSort(smallLetters)).to.deep.equal(sortedArray)
  })

  it('should sort a large array of numbers (140000)(541ms)', () => {
    let largeArray = genRanNum(140000)
    let sortedArray = [...largeArray].sort( (a, b) => a - b)

    expect(mergeSort(largeArray)).to.deep.equal(sortedArray)
  })

  it('should sort a large array of letters', () => {
    let largeLettersArray = charactersGen(120000)
    let sortedArray = [...largeLettersArray].sort()

    expect(mergeSort(largeLettersArray)).to.deep.equal(sortedArray)
  })

})
