# @goa/is-generator-function

[![npm version](https://badge.fury.io/js/@goa/is-generator-function.svg)](https://npmjs.org/package/@goa/is-generator-function)

`@goa/is-generator-function` is [fork] Checks If The Function Is An ES6 Generator.

```sh
yarn add -E @goa/is-generator-function
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`isGeneratorFunction(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import isGeneratorFunction from '@goa/is-generator-function'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `isGeneratorFunction(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-config">`Config`</a>__: Options for the program.

|   Name    |   Type    |    Description    | Default |
| --------- | --------- | ----------------- | ------- |
| shouldRun | _boolean_ | A boolean option. | `true`  |
| __text*__ | _string_  | A text to return. | -       |

```js
/* alanode example/ */
import isGeneratorFunction from '@goa/is-generator-function'

(async () => {
  const res = await isGeneratorFunction({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Idio][1] 2019

[1]: https://idio.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>