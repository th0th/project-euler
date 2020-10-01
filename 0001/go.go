package main

import "fmt"

func solve(limit int, dividers []int) int {
	sum := 0

	for i := 1; i < limit; i++ {
		for _, d := range dividers {
			if i%d == 0 {
				sum += i
				break
			}
		}
	}

	return sum
}

func main() {
	dividers := []int{3, 5}

	fmt.Println(solve(1000, dividers))
}
