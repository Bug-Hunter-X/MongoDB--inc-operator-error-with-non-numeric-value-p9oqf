```javascript
// Correct use of $inc operator in MongoDB update operation.
db.collection.updateOne({"_id":1},{$inc:{a:1}});
// Alternative solution to increment a string value (concatenation)
db.collection.updateOne({"_id":1}, {$set: {a: a + "new" }}); 
```