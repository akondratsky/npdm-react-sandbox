import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { injectHTML } from 'node-inject-html';
import { createNpdmRouter } from '@npdm/express';
import { fetchVersions } from './fetchVersions';

import { config } from 'dotenv';

config();
const app = express();


app.use(cors());

// connect NPDM to route
app.use('/npdm', createNpdmRouter({
  include: [{ name: 'npdmjs-react-example' }],
}));

// just load the basic page URL
app.get('/', async (req, res) => {
  const html = fs.readFileSync('./dist/index.html', 'utf-8');
  const versions = await fetchVersions();

  res.send(injectHTML(html, {
    headStart: `<script>window.NPDM_VERSION=${JSON.stringify(versions)}</script>`,
  }));
});

// serve static
app.use(express.static('dist'));

app.listen(3333, () => {
  console.log('server started at http://localhost:3333');
});
