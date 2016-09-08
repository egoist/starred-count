# starred-count

[![NPM version](https://img.shields.io/npm/v/starred-count.svg?style=flat-square)](https://npmjs.com/package/starred-count) [![NPM downloads](https://img.shields.io/npm/dm/starred-count.svg?style=flat-square)](https://npmjs.com/package/starred-count) [![Build Status](https://img.shields.io/circleci/project/egoist/starred-count/master.svg?style=flat-square)](https://circleci.com/gh/egoist/starred-count)

> Get total starred count for a GitHub user.

## Install

```bash
$ npm install --save starred-count
```

## Usage

To get this count ⬇️⬇️

![img](https://ooo.0o0.ooo/2016/09/08/57d0d30550d75.png)

```js
const getCount = require('starred-count')

getCount('egoist')
  .then(count => {
    console.log(count)
    //=> 2026
  })
```

## API

### starredCount(username, [access_token])

access_token is optional, no scopes are required for this case.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
