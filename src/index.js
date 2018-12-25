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

    h = hsla[1]
    s = hsla[2]
    l = hsla[3]
    a = hsla[4]
  }

  return function(arg) {
    if (typeof arg === 'function') return arg(h, s, l, a)()

    h = parseInt(validate(h, 0, 360), 10)
    s = validate(s, 0, 100)
    l = validate(l, 0, 100)
    a = validate(arg != null ? arg : a, 0, 1)

    return `hsla(${h}, ${s}%, ${l}%, ${a})`
  }
}
