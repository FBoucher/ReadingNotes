const mercury = require('@postlight/mercury-parser');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.url || (req.body && req.body.url)) {

        const _url = (req.query.url || req.body.url);
        cleanedPost = await mercury.parse(_url);

        context.res = {
            status: 200, /* Defaults to 200 */
            body: cleanedPost
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a URL on the query string or in the request body"
        };
    }
};