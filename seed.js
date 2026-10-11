require('dotenv').config();
const mongoose = require('mongoose');
const Tour = require('./models/Tour');
const tours = [
  { name: 'Himalayan Escape', slug: 'himalayan-escape', location: 'Manali, India', duration: '5 days', price: 12999, rating: 4.9, summary: 'Mountain air, pine forests, and unforgettable views.', description: 'Explore scenic mountain roads, peaceful villages, and panoramic Himalayan viewpoints. This sample tour is ideal for travellers who want a refreshing nature break.', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85', featured: true },
  { name: 'Coastal Calm', slug: 'coastal-calm', location: 'Goa, India', duration: '4 days', price: 9999, rating: 4.8, summary: 'Golden beaches, local food, and sunset walks.', description: 'Spend a few relaxed days exploring beaches, colourful markets, local food, and coastal sunsets.', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85', featured: true },
  { name: 'Royal Rajasthan', slug: 'royal-rajasthan', location: 'Jaipur, India', duration: '3 days', price: 7499, rating: 4.7, summary: 'Historic forts, vibrant bazaars, and royal architecture.', description: 'Discover Rajasthan through its historic architecture, colourful bazaars, traditional food, and local culture.', image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=85', featured: false },
  { name: 'Forest & Falls', slug: 'forest-and-falls', location: 'Rishikesh, India', duration: '2 days', price: 5499, rating: 4.8, summary: 'Riverside scenery, forest trails, and fresh air.', description: 'Enjoy riverside views, guided nature walks, and time to explore the foothills.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85', featured: false }
];
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Tour.deleteMany({});
    await Tour.insertMany(tours);
    console.log(`Seeded ${tours.length} sample tours.`);
  } catch (err) {
    console.error(err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
})();
