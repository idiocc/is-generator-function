# @goa/is-generator-function

[![npm version](https://badge.fury.io/js/%40goa%2Fis-generator-function.svg)](https://npmjs.org/package/@goa/is-generator-function)

`@goa/is-generator-function` is a [fork](https://github.com/ljharb/is-generator-function) that Checks If The Function Is An ES6 Generator written in ES6 modules.

The original module has been updated to be used in [`@goa/koa`](https://artdecocode.com/goa/): _Koa_ web server compiled with _Google Closure Compiler_ using [**Depack**](https://artdecocode.com/depack/) into a single file library (0 dependencies).

```sh
yarn add @goa/is-generator-function
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`isGeneratorFunction(fn: function)`](#isgeneratorfunctionfn-function-void)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import isGeneratorFunction from '@goa/is-generator-function'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `isGeneratorFunction(`<br/>&nbsp;&nbsp;`fn: function,`<br/>`): void`

Checks if the function is a generator function.

```js
import isGeneratorFunction from '@goa/is-generator-function'

console.log(isGeneratorFunction(function * generator() {} ))
console.log(isGeneratorFunction({ * generator() {} }.generator))
console.log(isGeneratorFunction(() => console.log('example')))
```
```
true
true
false
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

Original Author: **Jordan Harband**

---

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://idio.cc">Idio</a> 2019</th>
    <th>
      <a href="https://idio.cc">
        <img src="https://avatars3.githubusercontent.com/u/40834161?s=100" width="100" alt="Idio" />
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>