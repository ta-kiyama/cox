import $step from "./step";
import $stepAsync from "./stepAsync";
import generateEffectProps from "../generateEffectProps";

const step = $step.value;
const stepAsync = $stepAsync.value;

const wrap = gen => function wrap() {
  const itr = gen.apply(this, arguments);
  const firstResult = itr.next();
  const isAsync = firstResult instanceof Promise;

  if (isAsync) {
    return (async () => {
      let { value, done } = await firstResult;

      while (!done) {
        const nextArg = await stepAsync(value);
        const result = await itr.next(nextArg);

        value = result.value;
        done = result.done;
      }

      return value;
    })();
  } else {
    let { value, done } = firstResult;

    while (!done) {
      const nextArg = step(value);
      const result = itr.next(nextArg);

      value = result.value;
      done = result.done;
    }

    return value;
  }
};

export default generateEffectProps((options) => wrap)();
