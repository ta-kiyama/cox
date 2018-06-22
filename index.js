"use strict";

const cox = gen => function() {
  const itr = gen.apply(this, arguments);
  const firstResult = itr.next();
  const isAsync = firstResult instanceof Promise;

  if (isAsync) {
    return (async () => {
      let { value, done } = await firstResult;

      if(!Array.isArray(value)) value = [value];

      while (!done) {
        const func = value.shift();

        let nextArg;
        if (func != null) {
          if (typeof func === "function") {
            nextArg = func(...value);
          } else {
            nextArg = func[0].call(func[1], ...value);
          }
        } else {
          nextArg = value[0];
        }

        const result = await itr.next(nextArg);

        value = result.value;
        done = result.done;
      }
      return value;
    })();
  } else {
    let { value, done } = firstResult;

    if(!Array.isArray(value)) value = [value];

    while (!done) {
      const func = value.shift();

      let nextArg;
      if (func != null) {
        if (typeof func === "function") {
          nextArg = func(...value);
        } else {
          nextArg = func[0].call(func[1], ...value);
        }
      } else {
        nextArg = value[0];
      }

      const result = itr.next(nextArg);

      value = result.value;
      done = result.done;
    }
    return value;
  }
};

module.exports = cox;
