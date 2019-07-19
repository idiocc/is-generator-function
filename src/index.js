/**
 * @license MIT
 * 2014 Jordan Harband
 * https://github.com/ljharb/is-generator-function
 */
const toStr = Object.prototype.toString
const fnToStr = Function.prototype.toString
const isFnRegex = /^\s*(?:function)?\*/
const hasToStringTag = typeof Symbol == 'function' && typeof Symbol.toStringTag == 'symbol'
const getProto = Object.getPrototypeOf
const getGeneratorFunc = function () { // eslint-disable-line consistent-return
  if (!hasToStringTag) {
    return false
  }
  try {
    return Function('return function*() {}')()
  } catch (e) { /**/}
}
const generatorFunc = getGeneratorFunc()
const GeneratorFunction = generatorFunc ? getProto(generatorFunc) : {}

/**
 * Check if the function is a generator function.
 * @param {!Function} fn The function to check for being a generator.
 */
export default function isGeneratorFunction(fn) {
  if (typeof fn != 'function') {
    return false
  }
  if (isFnRegex.test(fnToStr.call(fn))) {
    return true
  }
  if (!hasToStringTag) {
    const str = toStr.call(fn)
    return str == '[object GeneratorFunction]'
  }
  return getProto(fn) == GeneratorFunction
}