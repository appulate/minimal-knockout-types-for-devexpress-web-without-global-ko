# Minimal Knockout.js TypeScript definitions for @types/devexpress-web without global ko variable

## Problem

`@types/devexpress-web` refers to `@types/knockout` via `<reference types='knockout' />`, so types and variable declarations from this package fall into global scope. This leads to several problems:
1. `@types/knockout` declares the `ko` global variable, so TypeScript does not throw any errors when such a global variable is used in the module without its import.
2. If the `ko` global variable from `@types/knockout` package is not used anywhere, the following error occurs for some reason:
```
node_modules/@types/knockout/index.d.ts:1062:13 - error TS2403: Subsequent variable declarations must have the same
type. Variable 'ko' must be of type 'typeof import(".../node_modules/knockout/build/types/knockout")', but here has
type 'KnockoutStatic'.

	1062 declare var ko: KnockoutStatic;
	                 ~~

	  node_modules/knockout/build/types/knockout.d.ts:5:1
	    5 export as namespace ko;
	      ~~~~~~
	    'ko' was also declared here.
```
 
## Solution:
 
To solve these problems, we use the Yarn resolutions functionality to replace the `@types/knockout` package with one that does not contain the global `ko` variable. We have to declare some global types because they are used in `@types/devexpress-web`. If the `@types/devexpress-web` package starts using some other Knockout types in the future, we will need to add them to this file.
```json
{
  "resolutions": {
    "@types/knockout": "@appulate/minimal-knockout-types-for-devexpress-web-without-global-ko",
  }
}
