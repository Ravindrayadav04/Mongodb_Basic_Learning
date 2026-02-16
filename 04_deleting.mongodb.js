// Deleting Documents

use('Ecommerce');

// Delete One
db.contacts.deleteOne({ name: "Alice" })

// Delete Many
db.orders.deleteMany({ status: "Delivered" })


