class HSLA {
  static parse = (str) => {
    const [
      ,
      hue,
      saturation,
      lightness,
      alpha,
    ] = /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/.exec(str)

    return new HSLA(Number(hue), Number(saturation), Number(lightness), Number(alpha))
  }

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

export default HSLA
