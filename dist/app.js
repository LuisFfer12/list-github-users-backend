function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
Object.defineProperty(exports, '__esModule', { value: true });
const _express = require('express');

const _express2 = _interopRequireDefault(_express);
const _cors = require('cors');

const _cors2 = _interopRequireDefault(_cors);
const _routes = require('./routes');

const _routes2 = _interopRequireDefault(_routes);

class App {
  constructor() {
    this.server = _express2.default.call(void 0);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(_express2.default.json());
    this.server.use(_cors2.default.call(void 0));
  }

  routes() {
    this.server.use(_routes2.default);
  }
}

exports.default = new App().server;
