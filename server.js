const express = require('express');
const app = express();

// Set to Cloudflare Access authentication with session fallback
app.use(require("cloudflare-access"));

// Your existing authentication logic goes here

// Change the port numbers
const PORT1 = 3010;
const PORT2 = 3011;

app.listen(PORT1, () => {
  console.log(`Server running on port ${PORT1}`);
});

app.listen(PORT2, () => {
  console.log(`Server running on port ${PORT2}`);
});
