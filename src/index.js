const http = require("http");
const getUsers = require("./modules/users");

const server = http.createServer((request, response) => {
  const ipAddress = "http://127.0.0.1";
  const url = new URL(request.url, ipAddress);
  const helloValue = url.searchParams.get("hello");

  if (helloValue) {
    response.status = 200;
    response.statusMessage = "Ok";
    response.header = "Content-Type: text/plain";
    response.write(`hello, ${helloValue}`);
    response.end();
  }

  if (request.url === "/users") {
    response.statusCode = 200;
    response.message = "OK";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();
    return;
  }

  if (request.url === "/?hello") {
    response.statusCode = 400;
    response.message = "Bad Request";
    response.header = "Content-Type: text/plain";
    response.write(`Enter your name, please`);
    response.end();
    return;
  }

  if (request.url === "/") {
    response.statusCode = 200;
    response.message = "OK";
    response.header = "Content-Type: text/plain";
    response.write("Hello World!!!");
    response.end();
    return;
  }

  response.statusCode = 500;
  response.message = "OK";
  response.header = "Content-Type: text/plain";
  response.write("{}");
  response.end();
});

server.listen(3003, "127.0.0.1", () => {
  console.log("Server is running at http://127.0.0.1:3003/");
});
