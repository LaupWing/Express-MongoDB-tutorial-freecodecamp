const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Reference the directory where the static files/content are located
// This is relative to the root
app.use(express.static('public'));
app.listen(PORT, () => {console.info(`Server is running on port ${PORT}`)});

