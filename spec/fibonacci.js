'use strict'
import {expect} from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', () => {

  it('should be a function', () => {
    expect(fibonacci).to.be.a('function')
  })

  it('should return the fibonacci sequence', () => {
  expect(fibonacci(5)).to.deep.equal([0, 1, 1, 2, 3])
  })

  context( 'with invalid input', () => {
    it( 'returns invalid with any input that is not an integer', () => {
      expect( () => fibonacci( null )).to.throw( "InvalidInput" )
      expect( () => fibonacci( {} )).to.throw( "InvalidInput" )
      expect( () => fibonacci( 'meowmeowmeow' )).to.throw( "InvalidInput" )
    })

    it( 'THROWS AN ERROR RIGHT MEOW', () => {
      expect( () => fibonacci( 'meow' )).to.throw( "InvalidInput" )
    })
})
})
