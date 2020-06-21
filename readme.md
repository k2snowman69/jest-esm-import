### jest-esm-import

I was having a seriously hard time importing ESM modules and having Jest run without getting errors like

```bash
import { __rest } from 'tslib';
^^^^^^

SyntaxError: Cannot use import statement outside a module
```

so I created this repo as a small scratch pad to test and come up with the correct solution

### Links

- [Facebook's thread for tracking ES Module support](https://github.com/facebook/jest/issues/9430)
- [Node's documentation for ES modules](https://nodejs.org/api/esm.html)
