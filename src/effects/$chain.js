import coxSymbols from "../symbols";
import cox from "../index";
import generateEffect from "../generateEffect";
import generateEffectProps from "../generateEffectProps";

const generateChainEffectCallback = function*(thisArg, ...actors) {
  const lastResolver = !Array.isArray(actors[actors.length-1]) && actors.pop();

  for (const [selector, ...args] of actors) {
    const callback = selector(thisArg);
    thisArg = yield cox.call(callback, thisArg, ...args);
  }

  if(lastResolver) thisArg = yield cox(lastResolver, thisArg);

  return thisArg;
};

export default generateEffectProps((options) => generateEffect(coxSymbols.chain, options, generateChainEffectCallback));
