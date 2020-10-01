function listFibonacciNumbers(upTo) {
  const fibonnacciArray = [1, 2];
  let i = 0;

  while (i < upTo) {
    const currentLenght = fibonnacciArray.length;
    const nextValue =
      fibonnacciArray[currentLenght - 1] + fibonnacciArray[currentLenght - 2];

    if (i < upTo) {
      fibonnacciArray.push(nextValue);
    }

    i = nextValue + fibonnacciArray[currentLenght - 1];
  }

  return fibonnacciArray
    .filter((i) => i % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(listFibonacciNumbers(4_000_000));
