function lonelyinteger(a) {
  let pairs = a.length - 1;
  if (pairs == 1) return a[0];
  else {
    for (let i = 0; i < a.length; i++) {
      let count = 0;
      for (let j = 0; j < a.length; j++) {
        if (a[i] == a[j]) {
          count++;
        }
      }
      if (count == 1) {
        return a[i];
      }
    }
  }
}
console.log(lonelyinteger([0, 0, 1, 2, 1]));
console.log(lonelyinteger([1, 1]));
console.log(lonelyinteger([1, 1, 2]));
