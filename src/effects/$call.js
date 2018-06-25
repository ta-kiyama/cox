import coxSymbols from "../symbols";
import generateEffect from "../generateEffect";
import generateEffectProps from "../generateEffectProps";

export default generateEffectProps((options) => generateEffect(coxSymbols.call, options));
