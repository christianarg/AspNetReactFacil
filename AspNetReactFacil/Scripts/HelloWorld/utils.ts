
interface IAjaxOptions {
    url: string;
    data?: any;
    method?: string;
}

function objectToQueryString(params): string {
    if (params) {
        var esc = encodeURIComponent;
        var query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');

        return query;
    }
}

function ajax(options: IAjaxOptions) {

    const method = options.method != null ? 'GET' : options.method;
    const body = method == 'GET' ? null : JSON.stringify(options.data);
    const queryString = method == 'GET' ? "" : objectToQueryString(options.data);

    const url = queryString == null ? options.url : `${options.url}?${queryString}`;
    // Default options are marked with *
    return fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: body, // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses response to JSON
}

export { ajax, IAjaxOptions };