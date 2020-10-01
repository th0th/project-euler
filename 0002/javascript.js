function solve(limit) {
  let sum = 2;
  let i = 1;
  let j = 2;
  let next = j;

  while (i < limit) {
    next = i + j;
    i = j;
    j = next;

    if (next % 2 === 0) {
      sum = sum + j;
    }
  }

  return sum;
}

console.log(solve(4_000_000));
