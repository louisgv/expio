# Count the number of 1 in a binary.

Take a look at 10110101, how do we count the amount of 1?

The naive solution is to loop through the number and check if the bit is 1, then ++count.

However, going through 0 is very redundant. Imagine (n-2) of bits are 0, for example 1000000, then unnecessary cost will be accumulated. Two thoughts should be formed at this point, either we eliminate the 0s, or we eliminate the 1s as we go.

# Eliminating 0s

Should we "eliminate 0"? The problem with this approach, is that we are still acknowledging the existence of 0. Thus, unavoidably we take them into the count. With that, let's move on.

# Eliminating 1s

The nice thing about eliminating 1s is that everytime you killed a new 1, you just need to increase the count. Thus it is possible to count by looking only at the 1s. There is a binary trick that you might have heard from the Derping of the Nerds, called `flipping the last bit` (`ftlb`). Let's take a look at this example:

> `(10111 - 1) == 10110`

It killed the last (n-th) `1`! But what if I don't have a `1` on my last slot LAB?! Here's another one:

> `(11110 - 1) == 11101`

It killed the (n-1)-th `1`! But what if I don't have a `1` on my (n-1) slot LAB? And another one:

> `(10100 - 1) == 10011`

And another one:

> `(11000 - 1) == 10111`

And another one:

> `(10000 - 1) == 01111`

Oh ok, `ftlb` flips all the 0s and stop at the right most 1! But if it flips all the `0` into `1`, now I have more `1`?

Well, just kill them extra `1`s. How? Well, the original number can certainly contains all the old `0` goodies. With `AND`, they will flip our extra `1` back into `0` in no time:

> `(10111 & 10110) == 10110`
> `(10100 & 10011) == 10000`
> `(11000 & 10111) == 10000`
> `(10000 & 01111) == 00000`

Notice how the last one turned into a `0`? That's the trick, or our ending condition.

The solution is now trivial once we acquired this trick:

```
n = input;

count = 0;

while (n>0){
  ++count
  n = n & ftlb( n )
}
```
