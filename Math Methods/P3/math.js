
function floor(n) {
    if (n >= 0 && n < 0x80000000) {
      return n & 0xFFFFFFFF;
    }
    if (n > -0x80000000 && n < 0) {
      return (n - 1) & 0xFFFFFFFF;
    }
    return Math.floor(n);
}