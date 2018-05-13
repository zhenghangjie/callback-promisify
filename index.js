export function promisify(fn, context) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.call(context, ...args, (err, res) => {
        return err ? reject(err) : resolve(res);
      });
    });
  };
};