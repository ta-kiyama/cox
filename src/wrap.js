import coxSymbols from "./symbols";
import generateEffectProps from "./generateEffectProps";

const execNextArg = value => {
  const {
    callback,
    args,
    thisArg,
    type,
    options,
  } = value || {};

  switch(type) {
    case coxSymbols.cox:
      return [callback(...args), options];
    case coxSymbols.call:
      return [callback.call(thisArg, ...args), options];
    case coxSymbols.new:
      return [new callback(...args), options];
    case coxSymbols.chain:
      return [wrap(callback)(thisArg, ...args), options];
    default:
      return [value, {}];
  }
};

const wrap = gen => function wrap() {
  const itr = gen.apply(this, arguments);
  const firstResult = itr.next();
  const isAsync = firstResult instanceof Promise;

  if (isAsync) {
    return (async () => {
      let { value, done } = await firstResult;

      while (!done) {
        const [nextArg, options] = execNextArg(value);

        if(options.isError) throw nextArg;

        const result = await itr.next((options.isAsync) ? await nextArg : nextArg);

        value = result.value;
        done = result.done;
      }

      return value;
    })();
  } else {
    let { value, done } = firstResult;

    while (!done) {
      const [nextArg, options] = execNextArg(value);

      if(options.isAsync) throw new TypeError("cox-generator cannot use `await`. please use cox-async-generator instead.");
      if(options.isError) throw nextArg;

      const result = itr.next(nextArg);

      value = result.value;
      done = result.done;
    }

    return value;
  }
};

export default generateEffectProps((options) => wrap)();
