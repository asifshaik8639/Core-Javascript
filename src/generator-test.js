function* f(...a) {
    let s = new Set();
    for (x in a) {
      s.add(a[x]);
      yield a[x];
    }
    console.log(' value of s ==> ',s);
    yield s;
  }
  
  let f1 = f(3, 2, 1);
  
  while (true) {
    let yv = f1.next().value;
    console.log('outside value ==> ', yv);
    if (typeof yv == "object") {
      console.log('object value ==> ', yv);
      console.log(yv);
      break;
    }
  }