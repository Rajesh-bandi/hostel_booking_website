import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/hostel_management')
  .then(async () => {
    const result = await mongoose.connection.db.collection('students').updateMany(
      { email: 'student@test.com' },
      { $set: { isEmailVerified: true } }
    );
    console.log(`✅ Verified student email`);
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
