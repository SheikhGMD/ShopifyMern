const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get(
      'https://quickstart-2864e2ff.myshopify.com/admin/api/2023-11/products.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': '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',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});