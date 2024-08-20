import app from './app.js';
const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on Port ${PORT}`);
});
