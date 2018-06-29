import generateEffectProps from "../generateEffectProps";

const $if = (expression, resultValue) => {
  if(Array.isArray(expression) && resultValue === undefined) [expression, resultValue] = expression;
  if(!expression) return resultValue;
  if((expression instanceof Error) && !(resultValue instanceof Error)) throw expression;

  throw resultValue;
};

export default generateEffectProps((options) => $if)();
