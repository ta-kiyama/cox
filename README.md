[![npm version](https://badge.fury.io/js/%40ta-kiyama%2Fcox.svg)](https://badge.fury.io/js/%40ta-kiyama%2Fcox)

# cox
redux-saga like proxy generator with Async Generator

# install

`npm install -D @ta-kiyama/cox`

# sample

## sync function

```js
cox(function* (arg) {
  let result, func;
  
  console.log(arg); // "hoge"
  
  // call sync-function
  result = yield exec(Date.now);
  console.log(result); // 1529633615127

  // call sync-function
  result = yield exec(JSON.stringify, { a: 10 });
  console.log(result); // {"a":10}
  
  // call sync-function with this
  func = function(num) { return Number(this) + num; };
  result = yield call(func, 100, 20);
  console.log(result); // 120
  
  // create new instance from class
  class Klass {
    constructor(x) { this.num = x; }
  }
  result = yield make(Klass, 18);
  console.log(result.num); // 18
  
  // call chain methods
  result = yield* chain(
    [1, 2, 3, 4, 5],
    [t => t.map, x => x * 2],
    [t => t.map, x => x + 1],
    [t => t.filter, x => x % 3 === 0],
  );
  console.log(result); // [3, 9]
  
  // yield only variables or literals
  result = yield [100, 200];
  console.log(result); // [100, 200]
})("hoge");
```

## async function

```js
cox(async function* (arg) {
  let result, func;
  
  console.log(arg); // "fuga"
  
  // call sync-function
  result = yield exec(Date.now);
  console.log(result); // 1529633615127

  // call sync-function
  result = yield exec(JSON.stringify, { a: 10 });
  console.log(result); // {"a":10}
  
  // call sync-function with this
  func = function(num) { return Number(this) + num; };
  result = yield call(func, 100, 20);
  console.log(result); // 120
  
  // create new instance from class
  class Klass {
    constructor(x) { this.num = x; }
  }
  result = yield make(Klass, 18);
  console.log(result.num); // 18
  
  // call chain methods
  result = yield* chain(
    [1, 2, 3, 4, 5],
    [t => t.map, x => x * 2],
    [t => t.map, x => x + 1],
    [t => t.filter, x => x % 3 === 0],
  );
  console.log(result); // [3, 9]
  
  // call async-function
  func = (n) => Promise.resolve(n);
  result = await (yield exec(func, 50));
  console.log(result); // 50
  
  // yield only variables or literals
  result = yield [100, 200];
  console.log(result); // [100, 200]
})("fuga");
```

# test

1. export generator
    ```js
    // ./someworker.js
    export default async function* () {
      // do somethings...
      
      // example: JSON.stringify proxy
      yield exec(JSON.stringify, { a: 10 });
    };
    ```
1. [not testing file] import `cox` and `someworker`
    ```js
    // ./main.js
    import cox from "@ta-kiyama/cox";
    import worker from "./someworker";
    
    const func = cox(worker);
    
    // do somethings...
    
    // and, execute bound function with cox
    await func();
    ```
1. [testing file] you just only import `someworker`
    ```js
    // ./main.test.js
    import worker from "./someworker";
    
    test("someworker", async() => {
      const func = worker();
      let result;
      
      result = await func.next();
      
      expect(callback).toBe(JSON.parse));
      expect(args).toMatchObject({ a: 10 });
      
      result = await func.next(result);
      ...
    });
    ```
