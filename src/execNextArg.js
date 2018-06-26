import coxSymbols from "./symbols";

const execNextArg = value => {
  const {
    callback,
    args,
    thisArg,
    type,
    options,
  } = value || {};

  switch(type) {
    case coxSymbols.cox:
      return [callback(...args), options];
    case coxSymbols.call:
      return [callback.call(thisArg, ...args), options];
    case coxSymbols.new:
      return [new callback(...args), options];
    case coxSymbols.chain:
      return [wrap(callback)(thisArg, ...args), options];
    default:
      return [value, {}];
  }
};

export default execNextArg;
