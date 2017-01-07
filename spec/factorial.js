'use strict'
import {expect} from 'chai'
import factorial from '../src/factorial'

describe('factorial', () => {

  it('exists', () => {
    expect(factorial).to.be.a('function')
  })

  it('should take a number and return the factorial of that number', () => {
    expect(factorial(5)).to.equal(120)
    expect(factorial(3)).to.equal(6)
    expect(factorial(6)).to.equal(720)
  })
  context( 'with invalid input', () => {
    it( 'returns invalid for anything but a number value', () => {
      expect( () => factorial( 'string' )).to.throw( "InvalidInput" )
      expect( () => factorial( {} )).to.throw( "InvalidInput" )
      expect( () => factorial( [] )).to.throw( "InvalidInput" )
    })


  })
})
