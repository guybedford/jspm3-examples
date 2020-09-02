## jspm 3 examples

> This work is unreleased, please do not broadcast.

Examples of jspm 3 import maps comparing native modules, single file build, preloading and SystemJS workflows.

The example file is [`module.js`](https://github.com/guybedford/jspm3-examples/blob/master/module.js) in this repo, which depends on 1.1MB of JS using Node.js conventions.

Performance for the various cases included below (very rough ballpark averaging applied over multiple runs):

| Example Case                                           | Uncached | Cached |
| -------------------------------------------------------| -------- | ------ |
| [1. Single File Build](#1-esm-buid)                    | 640ms    | 48ms   |
| [2. Direct Import ESM](#2-esm-import)                  | 850ms    | 160ms  |
| [3. Direct Import SystemJS](#3-system-import)          | 1150ms   | 180ms  |
| [4. Import with Preloads ESM](#4-esm-preload)          | 850ms    | 60ms   |
| [5. Import with Preloads SystemJS](#5-system-preload)  | 960ms    | 52ms   |
| [6. Import with Depcache SystemJS](#6-system-depcache) | 900ms    | 120ms  |

### 1. ESM Build

> [Example](https://guybedford.github.io/jspm3-examples/1-esm-build) ([source](https://github.com/guybedford/jspm3-examples/blob/master/1-esm-build.html))

This is just loading `module-build.js`, the single file build.

### 2. ESM Import

> [Example](https://guybedford.github.io/jspm3-examples/2-esm-import) ([source](https://github.com/guybedford/jspm3-examples/blob/master/2-esm-import.html))

This example just includes the native `<script type="module" src="module.js">`, with dependencies specified in the import map.

Requires Experimental Web Platform Features in Chrome for import maps support.

### 3. System Import

> [Example](https://guybedford.github.io/jspm3-examples/3-system-import) ([source](https://github.com/guybedford/jspm3-examples/blob/master/3-system-import.html))

This is the version of (1) running through SystemJS modules and import map support.

### 4. ESM Preload

> [Example](https://guybedford.github.io/jspm3-examples/4-esm-preload) ([source](https://github.com/guybedford/jspm3-examples/blob/master/4-esm-preload.html))

Same as (2) but this inlines the list of needed modules as module tags in post-order to ensure upfront loading. Requires Experimental Web Platform Features in Chrome.

### 5. System Preload

> [Example](https://guybedford.github.io/jspm3-examples/5-system-preload) ([source](https://github.com/guybedford/jspm3-examples/blob/master/5-system-preload.html))

This inlines the SystemJS modules in post order, the SystemJS version of (4).

### 6. System Depcache

> [Example](https://guybedford.github.io/jspm3-examples/6-system-depcache) ([source](https://github.com/guybedford/jspm3-examples/blob/master/6-system-depcache.html))

This uses the "depcache" configuration in the SystemJS import map to achieve
preloading without needing to explicitly inline the script tags and instead using graph hints.
