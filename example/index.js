import isGeneratorFunction from '../src'

console.log(isGeneratorFunction(function * generator() {} ))
console.log(isGeneratorFunction({ * generator() {} }.generator))
console.log(isGeneratorFunction(() => console.log('example')))