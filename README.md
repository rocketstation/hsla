# HSLA

HSLA creates, modifies, stringifies HSLA colors

## Installation

```
npm i @rocketstation/hsla
```

## Usage

```javascript
import hsla from '@rocketstation/hsla'

console.log(hsla(0, 0, 0)()) // hsla(0, 0%, 0%, 1)
console.log(hsla(0, 0, 0, 100)()) // hsla(0, 0%, 0%, 1)
console.log(hsla('hsla(0, 0%, 0%, 1)')()) // hsla(0, 0%, 0%, 1)

console.log(hsla(0, 0, 0, 100)(50)) // hsla(0, 0%, 0%, 0.5)
console.log(hsla(0, 0, 0, 100)({ H: 360 S: 100 L: 100 A: 0 }) // hsla(360, 100%, 100%, 0)
console.log(hsla(180, 50, 50, 50)({ h: 180, s: 50, l: 50, a: -50 }) // hsla(360, 100%, 100%, 0)

console.log(hsla(999, 999, 999, 999)()) // hsla(360, 100%, 100%, 1)
console.log(hsla(-999, -999, -999, -999)()) // hsla(0, 0%, 0%, 0)
console.log(hsla(0.999, 0, 0)()) // hsla(1, 0%, 0%, 1)
```

## Motivation

We were tired of writing this code again and again

## License

HSLA is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
