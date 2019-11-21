const app = require('./service-2.js');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
