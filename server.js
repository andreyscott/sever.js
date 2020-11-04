const http = require('http');

const server = http.createServer((request, response) => {
    console.log('headers', request.headers)
    console.log("url", request.url)
    console.log("method", request.method)
    const user = {
    	name: "john",

    	hobby: "skating"
    }

	response.setHeader('content-type', 'application/json');
	response.end(JSON.stringify(user));
})
server.listen(3000);
