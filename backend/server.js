import app from './app.js';
const PORT = process.env.PORT || 3000;
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on Port http://localhost:${PORT}`);
});
