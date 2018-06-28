import coxSymbols from "./utils/symbols"

const generateEffect = (typeSymbol, options = {}, defaultEffect) => (...args) => {
  if (Array.isArray(args[0])) args = args[0];

  const callback = defaultEffect || args.shift();
  const thisArg = (() => {
    switch(typeSymbol) {
      case coxSymbols.call:
        return args.shift();
      case coxSymbols.chain:
        return args.shift()();
      case coxSymbols.raw:
        return callback;
      default:
        return undefined;
    }
  })();

  return {
    callback: (typeSymbol !== coxSymbols.raw) ? callback : undefined,
    args,
    thisArg,
    type: typeSymbol,
    isAsync: !!options.isAsync,
    isError: !!options.isError,
  };
};

export default generateEffect;
