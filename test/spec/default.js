import { equal, ok } from '@zoroaster/assert'
import isGeneratorFunction from '../../src'

const Context = {
  * concise() {},
  nonGen() {},
  generatorFunc: function* () { var x = yield; return x || 42 },
}

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof isGeneratorFunction, 'function')
  },
  'returns false for anon function'() {
    const func = function () {}
    const res = isGeneratorFunction(func)
    ok(!res)
  },
  'returns false for named function'() {
    const namedFunc = function foo() {}
    const res = isGeneratorFunction(namedFunc)
    ok(!res)
  },
  'returns false for non-generator function with faked toString'() {
    const func = function () {}
    func.toString = function () { return 'function* () { return "TOTALLY REAL I SWEAR!"; }' }
    const res = isGeneratorFunction(func)
    ok(!res)
  },
  'returns false for non-generator function with faked @@toStringTag'({ generatorFunc }) {
    const fakeGenFunction = {
      toString: function () { return String(generatorFunc) },
      valueOf: function () { return generatorFunc },
    }
    fakeGenFunction.toString = function () { return 'function* () { return "TOTALLY REAL I SWEAR!"; }' }
    fakeGenFunction[Symbol.toStringTag] = 'GeneratorFunction'
    const res = isGeneratorFunction(fakeGenFunction)
    ok(!res)
  },
  'returns true for generator functions'({ generatorFunc }) {
    const res = isGeneratorFunction(generatorFunc)
    ok(res)
  },
  'returns true for concise methods'({ concise }) {
    const res = isGeneratorFunction(concise)
    ok(res)
  },
  'returns false for concise non-generator methods'({ nonGen }) {
    const res = isGeneratorFunction(nonGen)
    ok(!res)
  },
}

export default T