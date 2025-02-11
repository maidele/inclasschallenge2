// Task 1

let products = [
    {name: "Laptop", price:1200, category: "Electronics"},
    {name: "Notebook", price:100, category: "Stationery"},

];

getProductsByCategory(products, category);{
    return products.filter(product => product.category == category);

}

console.log(getProductsByCategory)