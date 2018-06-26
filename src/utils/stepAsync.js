import execNextArg from "../execNextArg";
import generateEffectProps from "../generateEffectProps";

const stepAsync = async (value) => {
  value = (value instanceof Promise) ? (await value).value : value;

  const [nextArg, options] = execNextArg(value);

  if(options.isError) throw nextArg;

  return (options.isAsync) ? await nextArg : nextArg;
};

export default generateEffectProps((options) => stepAsync)();
