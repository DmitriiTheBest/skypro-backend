const http = require("http");
const getUsers = require("./modules/users");
const { URL } = require("url");

const server = http.createServer((request, response) => {
  const url = new URL(request.url, "http://127.0.0.1");
  const helloValue = url.searchParams.get("hello");

  if (helloValue) {
    response.status = 200;
    response.statusMessage = "Ok";
    response.header = "Content-Type: text/plain";
    response.write(`Hello, ${helloValue}`);
    response.end();

    return;
  }

  if (request.url === "/?users") {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();

    return;
  }

  if (request.url === "/") {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write("Hello World!!!");
    response.end();

    return;
  }

  if (!helloValue) {
    response.status = 400;
    response.statusMessage = "Bad Request";
    response.header = "Content-Type: text/plain";
    response.write(`Enter your name, please`);
    response.end();

    return;
  }

  response.statusCode = 500;
  response.statusMessage = "Internal Server Error";
  response.header = "Content-Type: text/plain";
  response.write("{}");
  response.end();

  return;
});

server.listen(3003, () => {
  console.log("Server is running at http://127.0.0.1:3003");
});
