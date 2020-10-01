from typing import List


def solve(limit: int, dividers: List[int]):
    sum = 0

    for i in range(1, limit):
        for d in dividers:
            if i % d == 0:
                sum += i
                break

    return sum


if __name__ == '__main__':
    print(solve(1000, [3, 5]))
