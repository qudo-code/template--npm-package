# JavaScript Libraryer

A boilerplate for creating NPM/JavaScript packages. Complete with a bundler and recommended packaging patterns.

## Features

- Rollup
- Babel
- EsLint
- Handy scripts

## Scripts
#### Development

|||
|-|-|
|`npm run build` | Builds and bundles the package. |
|`npm run dev` | Watches, builds and bundles the package.|

#### Testing

|||
|-|-|
| `npm run test`  | Runs `main.test.js` which by default imports your package and calls it as a function. |
| `npm run test:dev`  | Similar to the above command except it watches for changes. |

#### Publishing
The publishing scripts run a build, up the version, and publish to npm via `npm publish`. Publish your package using one of the following scripts and handle versioning.

|||
|-|-|
| `npm run publish:major`  | build + ticks up major version + publish |
| `npm run publish:minor`  | build + ticks up minor version + publish |
| `npm run publish:patch`  | build + ticks up patch version + publish |
