import mongoose from 'mongoose';
import Hostel from './server/models/Hostel.js';

mongoose.connect('mongodb://localhost:27017/hostel_management')
  .then(async () => {
    const hostel = await Hostel.findById('69c40d1dd3b4d29a62d5145c');
    console.log('Hostel owner:', hostel.owner);
    console.log('Owner type:', typeof hostel.owner);
    console.log('Owner toString():', hostel.owner.toString());
    console.log('\nExpected owner ID: 69c40d06d3b4d29a62d51455');
    console.log('Match:', hostel.owner.toString() === '69c40d06d3b4d29a62d51455');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
