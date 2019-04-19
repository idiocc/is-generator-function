import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import isGeneratorFunction from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof isGeneratorFunction, 'function')
  },
  async 'calls package without error'() {
    await isGeneratorFunction()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await isGeneratorFunction({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T