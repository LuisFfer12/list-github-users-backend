import { Router } from 'express';
import axios from 'axios';

const routes = new Router();

routes.get('/api/users', async (req, res) => {
  const { since } = req.query;
  const response = await axios.get(`https://api.github.com/users`, {
    params: {
      since,
    },
  });
  res.json(response.data);
});

routes.get('/api/users/:username/details', async (req, res) => {
  const { username } = req.params;
  const response = await axios.get(`https://api.github.com/users/${username}`);

  res.json(response.data);
});

routes.get(`/api/users/:username/repos`, async (req, res) => {
  const { username } = req.params;
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );
  res.json(response.data);
});

export default routes;
