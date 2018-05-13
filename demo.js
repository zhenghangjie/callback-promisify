import { promisify } from './index';

const fnObj = {
  print: (content, callback) => {
    callback(content === 'fail' ? 'new error' : null, content);
  }
}

// callback
fnObj.print("callback", () => {
  console.log('callback success');
});

// promisify
const promisifyFn = promisify(fnObj.print, fnObj);

promisifyFn('promise').then((content) => {
  return new Promise((resolve, reject) => {
    console.log('promise success');
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}).then((content) => {
  console.log('promise success after 2s');
}).catch((err) => {
    //异常情况
  console.log(err);
  throw new Error(err);
});