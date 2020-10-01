## Question

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

## Algorithm

Even though the first approach that comes to mind is to make an array-ish to hold all the filtered numbers between `1` and `max`, it would cause unnecessary memory usage.

So, the implementation should:

* store sum as a single variable, 
* iterate on all numbers, 
* add the number to the sum (and skip checking for other dividers)
