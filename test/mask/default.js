import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import isGeneratorFunction from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await isGeneratorFunction({
      text: input,
    })
    return res
  },
  context: Context,
})