import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get('/', (req, res) => {
  try {
    const dbPath = path.join(__dirname, 'db.json');
    const data = fs.readFileSync(dbPath, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading db.json:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default app;