# Summary #
This plugin for ImpactJS makes it easy to access URL "GET" variables.

# Installation #
1. Download plugin and place in `/lib/plugins/joncom/` folder.
2. Load plugin within Impact `requires` call.

# Example #

Let's say your game is running at URL:

http://example.com/game/?foo=bar&abc=123

`console.log(ig.urlVariables.foo); // Results in "bar"`

`console.log(ig.urlVariables['abc']); // Results in "123"`

All values will be strings, so you may need to parse integers.

