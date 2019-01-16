const hsla = require('./index')

it('gets hue, saturation, lightness alpha; returns valid HSLA string', () => {
  expect(hsla(0, 0, 0, 0)()).toBe('hsla(0, 0%, 0%, 0)')
})

it('gets hue, saturation, lightness; sets alpha to 1; returns valid HSLA string', () => {
  expect(hsla(0, 0, 0)()).toBe('hsla(0, 0%, 0%, 1)')
})

it('gets HSLA string; returns valid HSLA string', () => {
  expect(hsla('hsla(0, 0%, 0%, 1)')()).toBe('hsla(0, 0%, 0%, 1)')
})

it('modifies alpha; returns valid HSLA string', () => {
  expect(hsla(0, 0, 0)(0)).toBe('hsla(0, 0%, 0%, 0)')
})

it('modifies hue, saturation, lightness alpha; returns valid HSLA string', () => {
  expect(
    hsla(0, 0, 0)(({ h, s, l, a }) => ({
      h: h + 360,
      s: s + 100,
      l: l + 100,
      a: a - 1,
    }))
  ).toBe('hsla(360, 100%, 100%, 0)')
})

it('validates hue, saturation, lightness alpha; returns valid HSLA string', () => {
  expect(hsla(999, 999, 999, 999)()).toBe('hsla(360, 100%, 100%, 1)')
  expect(hsla(-999, -999, -999, -999)()).toBe('hsla(0, 0%, 0%, 0)')
  expect(hsla(0.999, 0, 0)()).toBe('hsla(0, 0%, 0%, 1)')
})
