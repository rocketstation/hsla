const hsla = require('./index')

it('returns null if color is not valid', () => {
  expect(hsla('foobar')).toBe(null)
})

it('gets hue, saturation, lightness alpha; returns valid HSLA string', () => {
  expect(hsla(0, 0, 0, 100)()).toBe('hsla(0,0%,0%,1)')
})

it('gets hue, saturation, lightness; sets alpha to 1; returns valid HSLA string', () => {
  expect(hsla(0, 0, 0)()).toBe('hsla(0,0%,0%,1)')
})

it('gets valid HSLA string; returns valid HSLA string', () => {
  expect(hsla('hsla(0, 0%, 0%, 1)')()).toBe('hsla(0,0%,0%,1)')
})

it('gets valid HSL string; returns valid HSLA string', () => {
  expect(hsla('hsl(0, 0%, 0%)')()).toBe('hsla(0,0%,0%,1)')
})

it('modifies alpha; returns valid HSLA string', () => {
  expect(hsla(0, 0, 0, 100)(0)).toBe('hsla(0,0%,0%,0)')
})

it('modifies hue, saturation, lightness alpha; returns valid HSLA string', () => {
  expect(hsla(180, 50, 50, 50)({ h: 180, s: 50, l: 50, a: 50 })).toBe(
    'hsla(360,100%,100%,1)'
  )
})

it('modifdies hue, saturation, lightness alpha; returns valid HSLA string', () => {
  expect(hsla(0, 0, 0)({ H: 360, S: 100, L: 100, A: 100 })).toBe(
    'hsla(360,100%,100%,1)'
  )
})

it('validates hue, saturation, lightness alpha; returns valid HSLA string', () => {
  expect(hsla(999, 999, 999, 999)()).toBe('hsla(360,100%,100%,1)')
  expect(hsla(-999, -999, -999, -999)()).toBe('hsla(0,0%,0%,0)')
  expect(hsla(0.999, 0, 0)()).toBe('hsla(1,0%,0%,1)')
})
