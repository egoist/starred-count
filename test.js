import test from 'ava'
import getCount from './'

test('main', async t => {
  const count = await getCount('seitazen')
  t.is(count, 19)
})

test('user not found', async t => {
  try {
    await getCount('adsfwfdfddsf')
  } catch (err) {
    t.is(err.statusCode, 404)
  }
})
