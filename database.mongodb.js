

// ArcadeHub MongoDB Playground
// Run the whole file with the MongoDB Playgrounds "Run All" button.

use('arcadehub');

// Database overview
db.getCollectionNames();

// All gaming stations
db.stations.find({}).sort({ name: 1 });

// Available stations only
db.stations.find(
  { status: 'available' },
  { name: 1, type: 1, hourlyRate: 1, status: 1 }
);

// Application users and their roles
db.users.find({}, { name: 1, email: 1, role: 1, active: 1 });

// Recent bookings
db.bookings.find({}).sort({ createdAt: -1 }).limit(20);

// Active and completed sessions
db.sessions.find({}).sort({ createdAt: -1 }).limit(20);

// Expense summary by category
db.expenses.aggregate([
  {
    $group: {
      _id: '$category',
      total: { $sum: '$amount' },
      entries: { $sum: 1 }
    }
  },
  { $sort: { total: -1 } }
]);

// Review summary by station
db.reviews.aggregate([
  {
    $group: {
      _id: '$station',
      averageRating: { $avg: '$rating' },
      reviewCount: { $sum: 1 }
    }
  }
]);
