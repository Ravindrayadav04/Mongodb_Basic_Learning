use ('Ecommerce');


// Insert sample sales data
db.sales.insertMany([
{ _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
{ _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
{ _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
{ _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
{ _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" }
]);


// Calculate total sales for each item
// $match : Filter documents
// $project : Reshape documents and calculate total sales for each item
db.sales.aggregate([
{ $match: { category: "Fruit" } },
{ $project: { _id: 0, item: 1, price: 1 } }
]);


// Calculate total sales for each category
// $group : Group and calculate totals
db.sales.aggregate([
{
 $group: {
 _id: "$category",
 totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
}
}
]);


// Calculate total sales for each category and sort by total sales in ascending order
// $sort : Sort results
db.sales.aggregate([
{
 $group: {
 _id: "$category",
 totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
}
},
{ $sort: { totalSales: 1 } }
]);


// Calculate total sales for the "Fruit" category
// Combine $match + $group
db.sales.aggregate([
{ $match: { category: "Fruit" } },
{
 $group: {
 _id: null,
 totalFruitSales: { $sum: { $multiply: ["$price", "$quantity"] } }
}
}
]);


