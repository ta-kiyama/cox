"use strict";

const generateEffect = typeSymbol => (callback, ...args) => {
  if (Array.isArray(callback)) {
    [callback, args] = [callback.shift(), callback];
  }

  if (!args || typeof args[Symbol.iterator] !== "function") {
    args = [];
  }

  const thisArg = typeSymbol === callSymbol ? args.shift() : undefined;

  return {
    callback,
    args,
    thisArg,
    [typeSymbol]: true
  };
};

const chainEffect = function*(thisArg, ...actors) {
  for (const [selector, ...args] of actors) {
    const callback = selector(thisArg);
    thisArg = yield call(callback, thisArg, ...args);
  }
  return thisArg;
};

const execNextArg = value => {
  const {
    callback,
    args,
    thisArg,
    [execSymbol]: isExec,
    [callSymbol]: isCall,
    [makeSymbol]: isMake
  } =
    value || {};

  if (isExec) {
    return callback(...args);
  } else if (isCall) {
    return callback.call(thisArg, ...args);
  } else if (isMake) {
    return new callback(...args);
  } else {
    return value;
  }
};

const cox = gen => function() {
  const itr = gen.apply(this, arguments);
  const firstResult = itr.next();
  const isAsync = firstResult instanceof Promise;

  if (isAsync) {
    return (async () => {
      let { value, done } = await firstResult;

      while (!done) {
        const nextArg = execNextArg(value);
        const result = await itr.next(nextArg);

        value = result.value;
        done = result.done;
      }
      return value;
    })();
  } else {
    let { value, done } = firstResult;

    while (!done) {
      const nextArg = execNextArg(value);
      const result = itr.next(nextArg);

      value = result.value;
      done = result.done;
    }
    return value;
  }
};

export const execSymbol = Symbol("exec");
export const callSymbol = Symbol("call");
export const makeSymbol = Symbol("make");

export const exec = generateEffect(execSymbol);
export const call = generateEffect(callSymbol);
export const make = generateEffect(makeSymbol);
export const chain = chainEffect;

export { cox };
export default cox;
