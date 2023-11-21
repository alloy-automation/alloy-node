# alloy-node

This is a tiny wrapper that interacts with Alloy Automation's Embedded and UAPI api's.

## Usage

```
import { Embedded, UAPI } from 'alloy-node';

...

let uapi = new UAPI(<apiKey>);
await uapi.connect(<connectionId>);

let embedded = new Embedded(<apiKey>);
await embedded.identify(<username>);
```
