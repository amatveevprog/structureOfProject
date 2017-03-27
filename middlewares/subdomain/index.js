/**
 * Created by Bonya on 18.03.2017.
 */
module.exports = function (options) {
    options = options || {}
    var path = '/' + (options.namespace || '_sub') + '/'

    // Support previous `www` boolean option
    var whitelist = options.www === false ? [] : ['www']

    if (typeof options.whitelist === 'string') {
        whitelist = [options.whitelist]
    } else if (Array.isArray(options.whitelist)) {
        whitelist = options.whitelist
    }
    //var path = '/_sub/';
    return function (req, res, next) {
        var subdomains = req.subdomains
        console.log(`inside wildcard:->>>subdomains:${req.subdomains}`);
        var host = req.hostname;

        /*var inWhitelist = whitelist.some(function(subdomain) {
         var i = subdomains.indexOf(subdomain)
         return i > -1
         })*/

        //if (inWhitelist) return next()

        // continue if no subdomains
        if (!subdomains.length) return next()

        // rebuild url
        req.url = path + subdomains.join('/') + req.url;
        console.log(`result of parsing subdomain: ${req.url}`);
        // Q.E.D.
        next()
    }
};
