import coxSymbols from "./symbols"

const generateEffect = (typeSymbol, options = {}, defaultEffect) => (...args) => {
  if (Array.isArray(args[0])) args = args[0];

  const callback = defaultEffect || args.shift();
  const thisArg = (() => {
    switch(typeSymbol) {
      case coxSymbols.call:
        return args.shift();
      case coxSymbols.chain:
        return args.shift()();
      default:
        return undefined;
    }
  })();

  return {
    callback,
    args,
    thisArg,
    type: typeSymbol,
    options: {
      isAsync: !!options.isAsync,
      isError: !!options.isError,
    },
  };
};

export default generateEffect;
