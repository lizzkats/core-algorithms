'use strict'
import collatz from '../src/collatz'
import {expect} from 'chai'

describe('collatz', () => {

  it('exists', () => {
    expect(collatz).to.be.a('function')
    })
  it('should take a number and return the collatz conjecture', () => {
    expect(collatz(1)).to.eql([1])
    expect(collatz(7)).to.eql([7, 22, 11, 34, 17, 52, 26, 13, 40,
    20, 10, 5, 16, 8, 4, 2, 1])
    })

  context( 'with invalid input', () => {
    it( 'returns empty array for a null', () => {
      expect( () => collatz( null )).to.throw( "InvalidInput" )
    })

    it( 'returns empty array for a string', () => {
      expect( () => collatz( 'meow' )).to.throw( "InvalidInput" )
    })

  })
})
