const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); // ✅ This is where "app" is defined

const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle POST request
app.post('/generate-video', (req, res) => {
  const { text } = req.body;
  console.log('Received text:', text);

  // Placeholder video response
  res.json({
    success: true,
    message: `Video generation triggered for: ${text}`,
    videoUrl: `http://example.com/fake-video.mp4`
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});












