// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('SchoolManagementV2');

// Create a new document in the collection.
db.getCollection('parents').insertOne({
    "fatherName": "Deepak",
  "motherName": "Singh",
  "email": "deepak@gmail.com",
  "phone": "7856252512",
  "address": "Amritsar",
  "isMapped": "false",

});
