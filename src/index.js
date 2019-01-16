function validate(v, min, max) {
  switch (true) {
    case v < min:
      return min
    case v > max:
      return max
  }

  return v
}

module.exports = function(hue, saturation, lightness, alpha) {
  var h = hue
  var s = saturation
  var l = lightness
  var a = alpha != null ? alpha : 1

  if (arguments.length === 1) {
    var hsla = /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/.exec(
      arguments[0]
    )

    h = Number(hsla[1])
    s = Number(hsla[2])
    l = Number(hsla[3])
    a = Number(hsla[4])
  }

  return function(arg) {
    var next = {
      h: h,
      s: s,
      l: l,
      a: a,
    }

    switch (typeof arg) {
      case 'number':
        next.a = arg
        break
      case 'function':
        Object.assign(next, arg({ h, s, l, a }))
        break
    }

    return (
      'hsla' +
      '(' +
      [
        parseInt(validate(next.h, 0, 360), 10),
        validate(next.s, 0, 100) + '%',
        validate(next.l, 0, 100) + '%',
        validate(next.a, 0, 1),
      ].join(', ') +
      ')'
    )
  }
}
