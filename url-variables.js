/*
 * Plugin for ImpactJS which makes URL "GET" variables easily accessible.
 * @author   Jonathan Commins
 * @created  April 4, 2013
 */
ig.module('plugins.joncom.url-variables')
.requires()
.defines(function() {

    // Returns an object of variables keyed by the name of the variable.
    var getUrlVariables = function() {
        // An object that will hold the value of each variable, keyed by name of that variable.
        var data = {};
        // Get the string that follows the "?" in the window's location.
        var search = window.location.search;
        if(search) {
            search = search.substr(1); // Drop the leading "?"
            var_pairs = search.split("&"); // Extract pairs in the form "foo=bar".
            // Extract variable name and value from each pair.
            for(var i=0; i<var_pairs.length; i++) {
                var var_name_and_value = var_pairs[i].split("=");
                var var_name = var_name_and_value[0];
                var var_value = var_name_and_value[1];
                data[var_name] = var_value; // Store variable.
            }
        }
        return data;
    };

    ig.urlVariables = getUrlVariables();

});