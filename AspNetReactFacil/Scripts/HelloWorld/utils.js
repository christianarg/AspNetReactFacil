"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectToQueryString(params) {
    if (params) {
        var esc = encodeURIComponent;
        var query = Object.keys(params)
            .map(function (k) { return esc(k) + '=' + esc(params[k]); })
            .join('&');
        return query;
    }
}
function ajax(options) {
    var method = options.method != null ? 'GET' : options.method;
    var body = method == 'GET' ? null : JSON.stringify(options.data);
    var queryString = method == 'GET' ? "" : objectToQueryString(options.data);
    var url = queryString == null ? options.url : options.url + "?" + queryString;
    // Default options are marked with *
    return fetch(url, {
        method: method,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: body,
    }).then(function (response) { return response.json(); }); // parses response to JSON
}
exports.ajax = ajax;
//# sourceMappingURL=utils.js.map