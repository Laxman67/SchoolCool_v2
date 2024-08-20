import mongoose from 'mongoose';
const DBConnect = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log('Database is Connected');
    })
    .catch((err) => {
      console.log(`Error Occred in DB Connection`);
    });
};

export default DBConnect;
