'use strict'
import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', () => {

it('should be a function', () => {
expect(fibonacci).to.be.a('function')
})

it('should return the fibonacci sequence', () => {
  expect(fibonacci(5)).to.deep.equal([0, 1, 1, 2, 3])
})
})
