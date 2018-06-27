import coxSymbols from "./utils/symbols";
import wrap from "./utils/wrap";
import step from "./utils/step";
import stepAsync from "./utils/stepAsync";
import $cox from "./effects/$cox";
import $call from "./effects/$call";
import $new from "./effects/$new";
import $chain from "./effects/$chain";
import $await from "./effects/$await";
import $throw from "./effects/$throw";

Object.defineProperties($cox, {
  symbol: {
    value: coxSymbols,
    enumerable: true,
    writable: true,
    configurable: true,
  },
  wrap,
  step,
  stepAsync,
  call: $call(),
  new: $new(),
  chain: $chain(),
  await: $await({ isAsync: true }),
  throw: $throw({ isError: true }),
});

Object.defineProperties($cox.await, {
  call: $call({ isAsync: true }),
  new: $new({ isAsync: true }),
  chain: $chain({ isAsync: true }),
});

Object.defineProperties($cox.throw, {
  call: $call({ isError: true }),
  new: $new({ isError: true }),
  chain: $chain({ isError: true }),
  await: $await({ isError: true, isAsync: true }),
});

Object.defineProperties($cox.throw.await, {
  call: $call({ isError: true, isAsync: true }),
  new: $new({ isError: true, isAsync: true }),
  chain: $chain({ isError: true, isAsync: true }),
});

export { coxSymbols };

export default $cox;
