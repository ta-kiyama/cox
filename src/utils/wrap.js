import $step from "./step";
import $stepAsync from "./stepAsync";
import generateEffectProps from "../generateEffectProps";

const step = $step.value;
const stepAsync = $stepAsync.value;

const wrap = gen => function wrap() {
  const itr = gen.apply(this, arguments);

  if (typeof itr.next !== "function") throw new TypeError(`first argument which name is ${gen.name} must be a generator function or async generator function.`);

  const firstResult = itr.next();
  const isAsync = firstResult instanceof Promise;

  if (isAsync) {
    return (async () => {
      let { value, done } = await firstResult;

      while (!done) {
      let nextArg, hasError;
        try{
          nextArg = await stepAsync(value);
        }
        catch(err) {
          hasError = err;
        }

        const result = await ((hasError) ? itr.throw(hasError) : itr.next(nextArg()));

        value = result.value;
        done = result.done;
      }

      return value;
    })();
  } else {
    let { value, done } = firstResult;

    while (!done) {
      let nextArg, hasError;
      try{
        nextArg = step(value);
      }
      catch(err) {
        hasError = err;
      }

      const result = (hasError) ? itr.throw(hasError) : itr.next(nextArg());

      value = result.value;
      done = result.done;
    }

    return value;
  }
};

export default generateEffectProps((options) => wrap)();
