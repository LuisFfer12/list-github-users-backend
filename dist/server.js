function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const _app = require('./app');

const _app2 = _interopRequireDefault(_app);

require('dotenv').config();

_app2.default.listen(process.env.PORT || 3333);
