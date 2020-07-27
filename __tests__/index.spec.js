const app = require('../index')

describe('say', () => {

  describe('factor of 3', () => {
    test.each`
    input | result
    ${3} | ${'Fizz'}
    ${6} | ${'Fizz'}
    ${3.0} | ${'Fizz'}
    ${6.0} | ${'Fizz'}
    ${-3} | ${'Fizz'}
    ${-6} | ${'Fizz'}
    ${-3.0} | ${'Fizz'}
    ${-6.0} | ${'Fizz'}
    
    `('it should return $result when input is $input', ({input, result}) => {
      const expected = app.say(input)
  
      expect(expected).toEqual(result)
    })
  });

  describe('factor of 5', () => {
    test.each`
    input | result
    ${5} | ${'Buzz'}
    ${10} | ${'Buzz'}
    ${5.0} | ${'Buzz'}
    ${10.0} | ${'Buzz'}
    ${-5} | ${'Buzz'}
    ${-10} | ${'Buzz'}
    ${-5.0} | ${'Buzz'}
    ${-10.0} | ${'Buzz'}
  
    `('it should return $result when input is $input', ({input, result}) => {
      const expected = app.say(input)
  
      expect(expected).toEqual(result)
    })
  });

  describe('factor of 15', () => {
    test.each`
    input | result
    ${15} | ${'Fizz Buzz'}
    ${30} | ${'Fizz Buzz'}
    ${15.0} | ${'Fizz Buzz'}
    ${30.0} | ${'Fizz Buzz'}
    ${-15} | ${'Fizz Buzz'}
    ${-30} | ${'Fizz Buzz'}
    ${-15.0} | ${'Fizz Buzz'}
    ${-30.0} | ${'Fizz Buzz'}
  
    `('it should return $result when input is $input', ({input, result}) => {
      const expected = app.say(input)
  
      expect(expected).toEqual(result)
    })
  });

  describe('not factor of 3 5 15', () => {
    describe('integer', () => {
      test.each`
      input | result
      ${2} | ${2}
      ${4} | ${4}
      ${14} | ${14}
      ${7} | ${7}
      ${11} | ${11}
      ${29} | ${29}
      ${31} | ${31}
      ${-2} | ${-2}
      ${-4} | ${-4}
      ${-14} | ${-14}
      ${-7} | ${-7}
      ${-11} | ${-11}
      ${-29} | ${-29}
      ${-31} | ${-31}
    
      `('it should return $result when input is $input', ({input, result}) => {
        const expected = app.say(input)
    
        expect(expected).toEqual(result)
      })
    }); 

    describe('float', () => {
      test.each`
      input | result
      ${3.0001} | ${3.0001}
      ${5.0001} | ${5.0001}
      ${15.0001} | ${15.0001}
    
      `('it should return $result when input is $input', ({input, result}) => {
        const expected = app.say(input)
    
        expect(expected).toEqual(result)
      })
    });
  });
    

  describe('non number', () => {
    test.each`
    input
    ${''}
    ${'3'}
    ${'5'}
    ${'15'}
    ${[]}
    ${{}}
    ${null}
    ${undefined}
  
    `('it should throw error when input is $input', ({input, result}) => {
      expect.assertions(1)
  
      expect(() => app.say(input)).toThrow(new Error('Not a number'))
    })
  });
})