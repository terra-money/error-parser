# @terra-money/error-parser
Parse error messages from Terra blockchain

## Installation

```
npm i @terra-money/error-parser
```

## Example codes
```typescript

import parse from "@terra-money/error-parser"

const errorMessage = "failed to execute message; message index: 0: Already claimed: execute wasm contract failed"

console.log(parse(errorMessage))
// Already claimed

```
