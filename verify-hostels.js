import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/hostel_management')
  .then(async () => {
    const result = await mongoose.connection.db.collection('hostels').updateMany(
      {},
      { $set: { isVerified: true } }
    );
    console.log(`✅ Verified ${result.modifiedCount} hostels`);
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
