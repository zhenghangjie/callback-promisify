# callback-promisify
```shell
npm install --save fn-callback-promisify
```

[demo](https://codesandbox.io/s/48x9vv6x27)

## USAGE

```javascript
import { promisify } from 'fn-callback-promisify';
```

```javascript
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
    //error
  console.log(err);
  throw new Error(err);
});
```

