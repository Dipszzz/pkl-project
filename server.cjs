const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Server is running. Visit /api/tribun to see articles.');
});

app.get('/api/tribun', async (req, res) => {
  try {
    const response = await axios.get('https://berita-indo-api-next.vercel.app/api/tribun-news/jakarta/bisnis');
    if (response.status === 200) {
      res.json(response.data?.data || []);
    } else {
      res.status(response.status).json({ message: 'Failed to fetch news from API' });
    }
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ message: 'Failed to fetch data from the source.' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});