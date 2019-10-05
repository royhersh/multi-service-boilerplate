const app = require('./service-1.js');

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});