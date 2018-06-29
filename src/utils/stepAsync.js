import execNextArg from "../execNextArg";
import generateEffectProps from "../generateEffectProps";

const stepAsync = async (value) => {
  value = (value instanceof Promise) ? (await value).value : value;

  let [nextArg, options] = execNextArg(value);

  if(options.isAsync) nextArg = await nextArg;
  if(options.isError) throw nextArg;

  return nextArg;
};

export default generateEffectProps((options) => stepAsync)();
