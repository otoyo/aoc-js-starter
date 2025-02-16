const assert = require('assert');
const part1 = require('./script.js').part1;
const part2 = require('./script.js').part2;

describe('Day 1', () => {
  const inputFile = __dirname + '/input-example.txt';

  describe('Part 1', () => {
    it('should return 1', () => {
      assert.equal(part1(inputFile), 1);
    });
  });

  describe('Part 2', () => {
    it('should return 2', () => {
      assert.equal(part2(inputFile), 2);
    });
  });
});