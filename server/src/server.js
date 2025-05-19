const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Products service running on port ${PORT}`);
  console.log(`API docs available at http://localhost:${PORT}/api-docs`);
});