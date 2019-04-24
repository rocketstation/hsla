var HSLA = /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/
var HSL = /^hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)$/

function validate(v, min, max) {
  switch (true) {
    case v < min:
      return min
    case v > max:
      return max
  }

  return v
}

function toString(h, s, l, a) {
  return (
    'hsla(' +
    validate(Math.round(h), 0, 360) +
    ',' +
    validate(s, 0, 100) +
    '%,' +
    validate(l, 0, 100) +
    '%,' +
    validate(a / 100, 0, 1) +
    ')'
  )
}

module.exports = function hsla() {
  var h, s, l, a

  if (arguments.length === 1) {
    var color = HSLA.exec(arguments[0]) || HSL.exec(arguments[0])

    if (!color) return null

    h = Number(color[1])
    s = Number(color[2])
    l = Number(color[3])
    a = color[4] ? Number(color[4]) * 100 : 100
  } else {
    h = arguments[0]
    s = arguments[1]
    l = arguments[2]
    a = arguments[3] != null ? arguments[3] : 100
  }

  return function(modifier) {
    switch (typeof modifier) {
      case 'number':
        return toString(h, s, l, modifier)
      case 'object':
        return toString(
          modifier.hasOwnProperty('H')
            ? modifier.H
            : h + (modifier.hasOwnProperty('h') ? modifier.h : 0),
          modifier.hasOwnProperty('S')
            ? modifier.S
            : s + (modifier.hasOwnProperty('s') ? modifier.s : 0),
          modifier.hasOwnProperty('L')
            ? modifier.L
            : l + (modifier.hasOwnProperty('l') ? modifier.l : 0),
          modifier.hasOwnProperty('A')
            ? modifier.A
            : a + (modifier.hasOwnProperty('a') ? modifier.a : 0)
        )
    }

    return toString(h, s, l, a)
  }
}
