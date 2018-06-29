import $step from "./step";
import $stepAsync from "./stepAsync";
import coxSymbols from "./symbols";
import generateEffectProps from "../generateEffectProps";

const step = $step.value;
const stepAsync = $stepAsync.value;
const symbols = [...Object.values(coxSymbols)];

const $if = (err) => {
  if(err instanceof Error) throw err;
  if(err && symbols.includes(err.type) && err.isError) {
    if(!err.isAsync) throw step(err);

    return stepAsync(err).then(x => Promise.reject(x));
  }

  return err;
};

export default generateEffectProps((options) => $if)();
