use ('Ecommerce');

// Find All Documents
db.products.find()

// Filter by Field
db.products.find({ category: "Electronics" })

// Using Comparison Operators
db.products.find({ price: { $gt: 1000 } }) // greater than 1000
db.products.find({ price: { $gte: 1000, $lte: 50000 } }) // between 1000 and 50000


// Logical Operators
db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

// Projection (Select Specific Fields)
 db.products.find({ category: "Electronics" }, { name: 1, price: 1, _id: 0 })


//  Sorting and Limiting (use for the pageniation )
db.products.find().sort({ price: -1 }).limit(2)


// by using skip we can skip the first 2 documents and get the next 2 documents
db.products.find().sort({ price: -1 }).skip(2).limit(2)