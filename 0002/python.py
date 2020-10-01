def solve(limit: int) -> int:
    sum = 2

    i = 1
    j = 2
    j2 = j

    while j < limit:
        j2 = i + j
        i = j
        j = j2

        if j2 % 2 == 0:
            sum += j

    return sum


if __name__ == '__main__':
    print(solve(4000000))
