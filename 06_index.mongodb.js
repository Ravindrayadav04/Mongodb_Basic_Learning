use ('Ecommerce');

// find all documents in the sales collection
db.sales.find()

// view the indexes on the sales collection
db.sales.getIndexes();

// Create Index
// Create an index on the "quantity" field
db.sales.createIndex({quantity:1});


// view the indexes after creating the index
db.sales.getIndexes();