# The Sieve of Eratosthenes

This method was made to count prime. In a way, it is quite similar to dynamic programming, minus the sub-problem.

How would you count all the prime number less than `n`? Given that:

- A number is a prime if it satisfies three conditions:

  1. It is greater than 1
  2. It is only dividable by 1 and itself
  3. 2 is the only even prime

- You do not have a preheated database of prime.

A number dividable by 1 and itself, must not be a multiplicity of any number prior to itself.

Thus, the trivial way is to look at all possible number until `n`, and try to check if it is a prime or not. This operation is fairly slow, as for each number at index `k`, we would have to take a look at `k-1` numbers before that, and see if first can divide the latter. This resulted in a growth rate of `nk` complexity. The growth rate complexity stays the same even if we cached all the prior prime and use that in place of the `k-1` list. Although the new `k` might be smaller, the complexity hold.

The trick to any counting problem, is to only `look at what matters`. If a prime satisfies `1.` and `2.`, what about non-prime? `1.` should hold, the only distinct different is the 2nd condition. A non-prime number is dividable by numbers other than 1 and itself. Looking from a different angle, a non-prime is a multiple of some number `x`. This `x` can be anything.

Since we are looking at only prime number, the best candidate to replace `x` is a prime.

> Rephrasing the condition: "A non-prime number is a multiple of a prime number".

Further more, condition `3.` means all even number except 2 are non-prime. Thus, we simply skip all even number altogether.

With this knowledge, for every prime number `k`, we can trace down all of its multiples until `n`. As defined above, a prime multiple is a non-prime, thus by marking all of these non-prime number, next time we see them, we can simply skip.

How should we keep track of these non-prime number? This data structure needs to satisfy two conditions:
  + It must store the index where we found the non-prime
  + It must return a boolean

Using a set should do, as we don't want duplication, and we can grab by the index. A map, or some funky object might do too. Whatever float your boat.

Let us describe our algorithm up till now. For each number k until the limit, we take k and check with the `nonPrime set` cache. If the cache has the number, we can safely skip it. Else, we take k and go through all of its multiplicity.

How do we go through its multiplicity? We iterate from a `starting number` to n, increment by k. Let's inspect the iteration sequence, with max = 50

```
3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48
5 10 15 20 25 30 35 40 45 50
7 14 21 28 35 42 49
11 22 33 44
13 26 39 42
17 34
19 38
23 46
29
...
```

Notice in the sequence, we have `even` number! This is redundant as we have already established above that we do not need to go through even number. Thus, let's modify the iteration such that even number are disregarded:

```
3 9 15 21 27 33 39 45
5 15 25 35 45
7 21 35 49
11 33
13 39
17
19
23
29
...
```

We can further improve the iteration by observing that we are looking at `15`, `21,` `35` twice! The thought process that go into this optimization is that the previous prime has already handled all the multiple that are smaller than the next one. TODO: Rephrase this somehow...

I.e, `3` has already covered `5*3`. Thus 5 can safely start from `5*5`.
Likewise, `3` and `5` has already covered `3*7` and `5*7`, thus 7 can safely start from `7*7`.
Like wise, `3` has already covered `3*11`, thus `11` can safely start from `11*2`.

Thus, our `starting number` of this loop, could be just the prime number squared, as all the multiple less than its squared has already been covered prior!

```
3 9 15 21 27 33 39 45
5 25 35 45
7 49
11
13
17
19
23
29
...
```

Looking at the number being inspected, we can now go forward.

Thus, the pseudo code for the sieve of Eratosthenes:

```
  if n < 3 return 0;

  Set<bool> nonprime;

  count = 1;

  for k = 3 : n
    if nonprime[k],
      k is a non-prime, simply (continue); // This skip all things below and advance the loop

    else, k is a prime:
    count++;
    // Let's mark down all the non-prime after k:

    for m = k*k : n // Start from k*k, ends at n
      nonprime[m] = true;
      m+= 2*k // Advance m by twice k, so that we skip all the even iteration.
    k+=2
```
