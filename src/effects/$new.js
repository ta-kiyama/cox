import coxSymbols from "../utils/symbols";
import generateEffect from "../generateEffect";
import generateEffectProps from "../generateEffectProps";

export default generateEffectProps((options) => generateEffect(coxSymbols.new, options));
