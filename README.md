[![npm version](https://badge.fury.io/js/%40ta-kiyama%2Fcox.svg)](https://badge.fury.io/js/%40ta-kiyama%2Fcox)

# cox
redux-saga like proxy generator with Async Generator

# install

`npm install -D @ta-kiyama/cox`

# sample

## sync function(sync-cox-generator)

```js
import cox from "@ta-kiyama/cox";

cox.wrap(function* (arg) {
  let result, func;
  
  console.log(arg); // "hoge"
  
  // call sync-function
  result = yield cox(Date.now);
  console.log(result); // 1529633615127

  // call sync-function with arguments
  result = yield cox(JSON.stringify, { a: 10 });
  console.log(result); // {"a":10}
  
  // call sync-function with this
  func = function(num) { return Number(this) + num; };
  result = yield cox.call(func, 100, 20);
  console.log(result); // 120
  
  // create new instance from class
  class Klass {
    constructor(x) { this.num = x; }
  }
  result = yield cox.new(Klass, 18);
  console.log(result.num); // 18
  
  // create new instance and throw error
  try {
    yield cox.throw.new(TypeError, "bad type");
  }
  catch(err) {
    console.log(err.message); // "bad type"
  }
  
  // call chain methods
  result = yield cox.chain(
    () => [1, 2, 3, 4, 5],
    [t => t.map, x => x * 2],
    [t => t.filter, x => x % 3 !== 0],
  );
  console.log(result); // [2, 4, 8, 10]
  
  // yield only variables or literals
  result = yield [100, 200];
  console.log(result); // [100, 200]
})("hoge");
```

## async function(async-cox-generator)

```js
import cox from "@ta-kiyama/cox";

cox.wrap(async function* (arg) {
  let result, func;
  
  console.log(arg); // "fuga"
  
  // call sync-function(same as sync-cox-generator)
  result = yield cox(Date.now);
  console.log(result); // 1529633615127
  
  // call async-function
  func = (n) => Promise.resolve(n);
  result = yield cox.await(func, 50);
  console.log(result); // 50
  
  // you can set cox.chain finalizer
  const delay = (ms) => (value) => new Promise((resolve) => setTimeout(() => resolve(value), ms));
  result = yield cox.await.chain(
    () => [1000, 3000, 500, 2000],
    [t => t.map, x => delay(x)(`first resolved is ${x}`)],
    (promises) => Promise.race(promises), // chain finalizer
  );
  console.log(result); // "first resolved is 500"
  
  // yield only variables or literals
  result = yield [100, 200];
  console.log(result); // [100, 200]
})("fuga");
```

# test

1. export generator
    ```js
    // ./someworker.js
    import cox from "@ta-kiyama/cox";
    
    export default function* () {
      // do somethings...
      
      // example: proxy of JSON.stringify
      yield cox(JSON.stringify, { a: 10 });
      
      // example: proxy of array method chain
      yield cox.chain(
        () => [1, 2, 3, 4, 5],
        [t => t.map, x => x * 2],
        [t => t.filter, x => x % 3 !== 0],
      );
    };
    ```
1. [not testing file] import `cox` and `someworker`
    ```js
    // ./main.js
    import cox from "@ta-kiyama/cox";
    import worker from "./someworker";
    
    const func = cox.wrap(worker);
    
    // and, execute sync-cox-generator
    const result = func();
    
    /* if async-cox-generator, func returns Promise
    func().then((result) => {
      // do somethings...
    });
    */
    ```
1. [testing file] you just only import `someworker`
    ```js
    // ./main.test.js
    import { coxSymbols } from "@ta-kiyama/cox";
    import worker from "./someworker";
    
    test("someworker", async() => {
      const func = worker();
      let result;
      
      // func is generator function. so you can access with `next()`
      result = func.next();
      
      console.log(result); // { callback: `[Function stringify]`, args: [{ a: 10 }], thisArg: undefined, type: `[Symbol cox]`, isAsync: false, isError: false }
      
      // you can test generator result
      expect(result.callback).toBe(JSON.parse));
      expect(result.args[0]).toMatchObject({ a: 10 });
      expect(result.type).toBe(coxSymbols.cox);
      
      // when call `next()` again, you can next cox-object
      result = func.next();
      expect(result.type).toBe(coxSymbols.chain);
      
      const subFunc = result.callback(); // chain()'s callback is generator function. so, you can test same as main generator.
      
      result = subFunc.next();
      expect(result.callback).toBe(Array.prototype.map));
      
      result = subFunc.next(cox.step(result)); // cox.step is a converter util. this convert cox-object to calculated value
      /* if async generator, use cox.stepAsync instead.
      result = subFunc.next(cox.stepAsync(result));
      */
    });
    ```
