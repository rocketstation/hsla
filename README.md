# Check If Type

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

## Motivation

We were tired of writing this code again and again

## License

HSLA is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
