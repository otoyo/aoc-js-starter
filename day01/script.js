const fs = require('fs');

const part1 = (inputFile) => {
  const input = fs.readFileSync(inputFile, 'utf-8');

  // Note: ここにPart 1のプログラムを書きます
  return 1;
};

const part2 = (inputFile) => {
  const input = fs.readFileSync(inputFile, 'utf-8');

  // Note: ここにPart 2のプログラムを書きます
  return 2;
};

(() => {
  if (process.argv[1] !== __filename) return;

  const inputFile = __dirname + '/input.txt';

  console.log('Part 1:', part1(inputFile));
  // console.log('Part 2:', part2(inputFile));
})();

module.exports = { part1, part2 };