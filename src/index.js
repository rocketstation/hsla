export default class {
  constructor (hue, saturation, lightness, alpha) {
    this.hue = hue
    this.saturation = saturation
    this.lightness = lightness
    this.alpha = alpha
  }

  hsla ({
    h = this.hue,
    s = this.saturation,
    l = this.lightness,
    a = this.alpha,
  } = {}) { return `hsla(${h}, ${s}%, ${l}%, ${a})` }
}
