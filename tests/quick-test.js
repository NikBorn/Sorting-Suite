import { expect } from 'chai';
import quickSort from  '../scripts/quick.js';
import genRanNum from '../scripts/genRanNum.js';
import charactersGen from '../scripts/charactersGen.js'


describe('quickSort', () => {

  it('should be a function', () => {
    expect(quickSort).to.be.function
  })

  it('should sort a small array of numbers', () => {
    let smallArray = genRanNum(100)
    let sortedArray = [...smallArray].sort( (a, b) => a - b)


    expect(quickSort(smallArray)).to.deep.equal(sortedArray)
  })

  it('should sort a small array of letters', () => {
    let smallLetters = charactersGen(100)
    let sortedArray = [...smallLetters].sort()

    expect(quickSort(smallLetters)).to.deep.equal(sortedArray)
  })

  it('should sort a large array of numbers (120500)(1935ms)', () => {
    let largeArray = genRanNum(320500)
    let sortedArray = [...largeArray].sort( (a, b) => a - b)

    expect(quickSort(largeArray)).to.deep.equal(sortedArray)
  })

  it('should sort a large array of letters', () => {
    let largeLettersArray = charactersGen(50000)
    let sortedArray = [...largeLettersArray].sort()

    expect(quickSort(largeLettersArray)).to.deep.equal(sortedArray)
  })

})
