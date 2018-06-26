import execNextArg from "../execNextArg";
import generateEffectProps from "../generateEffectProps";

const step = (value) => {
  const [nextArg, options] = execNextArg(value);

  if(options.isAsync) throw new TypeError("cox-generator cannot use `await`. please use cox-async-generator instead.");
  if(options.isError) throw nextArg;

  return nextArg;
};

export default generateEffectProps((options) => step)();
