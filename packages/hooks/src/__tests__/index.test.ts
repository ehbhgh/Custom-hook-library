import * as wscodeHooks from '..';

describe('encodeHooks', () => {
  test('exports modules should be defined', () => {
    Object.keys(wscodeHooks).forEach((module) => {
      expect(wscodeHooks[module]).toBeDefined();
    });
  });
});
