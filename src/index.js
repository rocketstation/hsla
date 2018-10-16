export default class {
  constructor (hue, saturation, litness, alpha) {
    this.hue = hue
    this.saturation = saturation
    this.lightness = litness
    this.alpha = alpha
  }

  hsla ({
    h = this.hue,
    s = this.saturation,
    l = this.lightness,
    a = this.alpha,
  } = {}) { return `hsla(${h}, ${s}%, ${l}%, ${a})` }
}
