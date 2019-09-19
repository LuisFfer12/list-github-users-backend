function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
Object.defineProperty(exports, '__esModule', { value: true });
const _express = require('express');
const _axios = require('axios');

const _axios2 = _interopRequireDefault(_axios);

const routes = new (0, _express.Router)();

routes.get('/api/users', async (req, res) => {
  const { since } = req.query;
  const response = await _axios2.default.get(`https://api.github.com/users`, {
    params: {
      since,
    },
  });
  res.json(response.data);
});

routes.get('/api/users/:username/details', async (req, res) => {
  const { username } = req.params;
  const response = await _axios2.default.get(
    `https://api.github.com/users/${username}`
  );

  res.json(response.data);
});

routes.get(`/api/users/:username/repos`, async (req, res) => {
  const { username } = req.params;
  const response = await _axios2.default.get(
    `https://api.github.com/users/${username}/repos`
  );
  res.json(response.data);
});

exports.default = routes;
