import execNextArg from "../execNextArg";
import generateEffectProps from "../generateEffectProps";

const stepAsync = async (iteratorResult) => {
  if(iteratorResult instanceof Promise) iteratorResult = await iteratorResult;

  let [nextArg, options] = execNextArg(iteratorResult.value);

  if(options.isAsync) nextArg = await nextArg;
  if(options.isError) throw nextArg;

  return () => nextArg;
};

export default generateEffectProps((options) => stepAsync)();
