import mongoose from 'mongoose';

const DBConnect = async () => {
  await mongoose
    .connect(process.env.LOCALEDB_URL, {
      dbName: 'SchoolManagementV2',
    })
    .then(() => {
      console.log('Database is Connected');
    })
    .catch((err) => {
      console.log(`Error Occred in DB Connection: ${err}`);
    });
};

export default DBConnect;
