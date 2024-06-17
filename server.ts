import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { injectHTML } from 'node-inject-html';
import { createNpdmRouter } from '@npdm/express';

const app = express();

app.use(cors());

app.use('/npdm', createNpdmRouter({
  include: [{ name: 'npdmjs-react-example' }],
}));

app.get('/', (req, res) => {
  const html = fs.readFileSync('./dist/index.html', 'utf-8');
  res.send(injectHTML(html, {
    headStart: `<script>window.NPDM_VERSION=${fs.readFileSync('./versions.json', 'utf-8')}</script>`,
  }));
});

app.use(express.static('dist'));

app.listen(3333, () => {
  console.log('server started at http://localhost:3333');
});
