import HSLA from './index'

const color = new HSLA(0, 0, 0, 1)

it('parses HSLA string', () => {
  const color = HSLA.parse('hsla(0, 0%, 0%, 0)')

  expect(color.hue).toBe(0)
  expect(color.saturation).toBe(0)
  expect(color.lightness).toBe(0)
  expect(color.alpha).toBe(0)
})

it('defines hue, saturation, lightness, alpha', () => {
  expect(color.hue).toBe(0)
  expect(color.saturation).toBe(0)
  expect(color.lightness).toBe(0)
  expect(color.alpha).toBe(1)
})

it('returns curr hsla color', () => { expect(color.hsla()).toBe('hsla(0, 0%, 0%, 1)') })

it('returns hsla color with modified hue', () => { expect(color.hsla({ h: 360 })).toBe('hsla(360, 0%, 0%, 1)') })

it('returns hsla color with modified saturation', () => { expect(color.hsla({ s: 100 })).toBe('hsla(0, 100%, 0%, 1)') })

it('returns hsla color with modified lightness', () => { expect(color.hsla({ l: 100 })).toBe('hsla(0, 0%, 100%, 1)') })

it('returns hsla color with modified alpha', () => { expect(color.hsla({ a: 0 })).toBe('hsla(0, 0%, 0%, 0)') })
