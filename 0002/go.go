package main

import "fmt"

func solve(limit uint64) uint64 {
	var sum uint64 = 2

	var i uint64 = 1
	var j uint64 = 2
	var j2 uint64 = j

	for j < limit {
		j2 = i + j
		i = j
		j = j2

		if j%2 == 0 {
			sum += j
		}
	}

	return sum
}

func main() {
	var limit uint64 = 4000000

	fmt.Println(solve(limit))
}
