function fib(n) {
  let a = 0, b = 1, temp,
  if (n == 0)
    return a;
  for (int i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
