# HSLA

HSLA creates, modifies, stringifies HSLA colors

## Installation

```
npm i @rocketstation/hsla
```

## Usage

```javascript
import HSLA from '@rocketstation/hsla'

const color = new HSLA(0, 0, 0, 1)

console.log(color.hsla()) // hsla(0, 0%, 0%, 1)
console.log(color.hsla({ a: 0 })) // hsla(0, 0%, 0%, 0)
```

## API
`HSLA.parse(hslaStr)` - parces valid hsla string & returns `HSLA` instance

`new HSLA(h, s, l, a)` - returns `HSLA` instance

`new HSLA(h, s, l, a).hue` - return hue

`new HSLA(h, s, l, a).saturation` - return saturation

`new HSLA(h, s, l, a).lightness` - return lightness

`new HSLA(h, s, l, a).alpha` - returns alpha

`new HSLA(h, s, l, a).hsla({ h, s, l, a })` - modifies hue, saturation, lightness, alpha if passed & returns hsla string


## Motivation

We were tired of writing this code again and again

## License

HSLA is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
