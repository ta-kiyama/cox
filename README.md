[![npm version](https://badge.fury.io/js/%40ta-kiyama%2Fcox.svg)](https://badge.fury.io/js/%40ta-kiyama%2Fcox)

# cox
redux-saga like proxy generator with Async Generator

# install

`npm install -D cox`

# sample

## sync function

```js
cox(function* (arg) {
  let result, func;
  
  console.log(arg); // "fuga"
  
  // call sync-function
  result = yield [JSON.stringify, { x: 60 }];
  console.log(result); // {"x":60}
  
  // call sync-function with this
  func = function(num) { return Number(this) + num; };
  result = yield [[func, 200], 50];
  console.log(result); // 250
  
  // yield only variables or literals
  yield [null, 100, 200];
})("fuga");
```

## async function

```js
cox(async function* (arg) {
  let result, func;
  
  console.log(arg); // "hoge"
  
  // call sync-function
  result = yield [JSON.stringify, { a: 10 }];
  console.log(result); // {"a":10}
  
  // call sync-function with this
  func = function(num) { return Number(this) + num; };
  result = yield [[func, 100], 20];
  console.log(result); // 120
  
  // call async-function
  func = (n) => Promise.resolve(n);
  result = await (yield [func, 50]);
  console.log(result); // 50
})("hoge");
```

# test

1. export generator
    ```js
    // ./someworker.js
    export default async function* () {
      // do somethings...
      
      // example: JSON.stringify proxy
      yield [JSON.stringify, {"a": 10}]
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
    // ./main.js
    import worker from "./someworker";
    
    test("someworker", async() => {
      const func = worker();
      
      const [stringify, obj] = await func.next();
      
      expect(obj).toMatchObject({ a: 10 });
    });
    ```
