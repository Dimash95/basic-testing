import { simpleCalculator, Action } from './index';

describe('simpleCalculator', () => {
  test.each([
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 3, b: 2, action: Action.Subtract, expected: 1 },
    { a: 4, b: 2, action: Action.Multiply, expected: 8 },
    { a: 6, b: 3, action: Action.Divide, expected: 2 },
    { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  ])(
    'should calculate $a $action $b to be $expected',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );

  test.each([
    { a: 'invalid', b: 2, action: Action.Add },
    { a: 2, b: 'invalid', action: Action.Subtract },
    { a: 2, b: 2, action: 'invalid' },
  ])(
    'should return null for invalid input (a: $a, b: $b, action: $action)',
    ({ a, b, action }) => {
      expect(simpleCalculator({ a, b, action })).toBeNull();
    },
  );
});
