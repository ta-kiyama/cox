const generateEffectProps = (callback) => (options) => ({
  value: callback(options),
  writable: true,
  configurable: true,
});

export default generateEffectProps;
