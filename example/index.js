/* alanode example/ */
import isGeneratorFunction from '../src'

(async () => {
  const res = await isGeneratorFunction({
    text: 'example',
  })
  console.log(res)
})()