function solve(upTo, multiples) {
  const resultArray = new Set();

  [...Array(upTo).keys()].forEach((i) => {
    multiples.forEach((m) => {
      i % m === 0 && resultArray.add(Number(i));
    });
  });

  return [...resultArray].reduce((a, b) => a + b, 0);
}

console.log(solve(10, [3, 5]));
