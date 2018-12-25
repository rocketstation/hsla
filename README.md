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
console.log(hsla(0, 0, 0, 1)()) // hsla(0, 0%, 0%, 1)
console.log(hsla('hsla(0, 0%, 0%, 1)')()) // hsla(0, 0%, 0%, 1)

console.log(hsla(0, 0, 0, 1)(0.5)) // hsla(0, 0%, 0%, 0.5)
console.log(hsla(0, 0, 0, 1)((h, s, l, a) => hsla(h + 360, s + 100, l + 100, a - 1))) // hsla(360, 100%, 100%, 0)

console.log(hsla(999, 999, 999, 999)()) // hsla(360, 100%, 100%, 1)
console.log(hsla(-999, -999, -999, -999)()) // hsla(0, 0%, 0%, 0)
console.log(hsla(0.999, 0, 0)()) // hsla(0, 0%, 0%, 1)
```

## Motivation

We were tired of writing this code again and again

## License

HSLA is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
