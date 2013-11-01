### Summary ###

##### Makes URL "GET" variables easily accessible in ImpactJS. #####

## Installation ##

1. Download plugin.
2. Make folder `/lib/plugins/joncom/url-variables/`.
3. Place `url-variables.js` inside folder.
4. Require `'plugins.joncom.url-variables.url-variables'` in `main.js`.

## Usage ##

Let's say your game is running at URL: http://example.com/game/?foo=bar&abc=123

`console.log(ig.urlVariables.foo); // Results in "bar"`

`console.log(ig.urlVariables['abc']); // Results in "123"`

All values will be strings, so you may need to parse integers.

