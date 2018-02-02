// this app's port for development
const PORT = 3000;

// this app's server location
const HOST = {
  production: "",
  development: "http://localhost:" + PORT
}

// this determines what environment the server is running in
const ENV = "development";

module.exports = {
  api: HOST[ENV],
  port: PORT,
}
