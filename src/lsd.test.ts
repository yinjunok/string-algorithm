import lsd from './lsd'

it('', () => {
  const expected = ['CK750', 'GC983', 'IO720', 'YE230']
  const r = lsd(['GC983', 'YE230', 'IO720', 'CK750'], 5)
  expect(r).toEqual(expected)
})
