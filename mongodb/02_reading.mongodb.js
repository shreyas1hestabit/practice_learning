use('ecommerce');
//db.products.find({"name":"Wireless Mouse"})

//to get products with price greater than 1000
//db.products.find({price:{$gt: 1000}})

//logical operators
db.products.find({$or:[{category:"electronics"},{stock:{$lt:50}}]})