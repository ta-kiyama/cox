import coxSymbols from "./utils/symbols";
import wrap from "./utils/wrap";
import step from "./utils/step";
import stepAsync from "./utils/stepAsync";
import $cox from "./effects/$cox";
import $call from "./effects/$call";
import $new from "./effects/$new";
import $chain from "./effects/$chain";
import $raw from "./effects/$raw";

const cox = $cox().value;

Object.defineProperties(cox, {
  symbol: {
    value: coxSymbols,
    enumerable: true,
    writable: true,
    configurable: true,
  },
  wrap,
  step,
  stepAsync,
  raw: $raw(),
  call: $call(),
  new: $new(),
  chain: $chain(),
  await: $raw({ isAsync: true }),
  throw: $raw({ isError: true }),
});

Object.defineProperties(cox.await, {
  cox: $cox({ isAsync: true }),
  call: $call({ isAsync: true }),
  new: $new({ isAsync: true }),
  chain: $chain({ isAsync: true }),
});

Object.defineProperties(cox.throw, {
  cox: $cox({ isError: true }),
  call: $call({ isError: true }),
  new: $new({ isError: true }),
  chain: $chain({ isError: true }),
  await: $raw({ isError: true, isAsync: true }),
});

Object.defineProperties(cox.throw.await, {
  cox: $cox({ isError: true, isAsync: true }),
  call: $call({ isError: true, isAsync: true }),
  new: $new({ isError: true, isAsync: true }),
  chain: $chain({ isError: true, isAsync: true }),
});

export { coxSymbols };

export default cox;
