// Task 1

let products = [
    {name: "Laptop", price:1200, category: "Electronics"},
    {name: "Notebook", price:100, category: "Stationery"},

];

function getProductsByCategory(products_array, category_name){
    return products_array.filter(product => product.category == category == category_name);
    
//}

console.log(getProductsByCategory(products, "Electronics"));

//Task 2

function applyDiscount(products, discountRate) {
 return products.map(products => ({
    ...product,
    price: products.price -(prodcut.price *discountRate)
} 

 ))
}

 console.log (applyDiscount(products, .1));


 //Task 3

 let sales = [250,400, 150, 900, 1200];

 function calculateTotalRevenue(sales) {
    return sales.reduce((total,sale) => total+sale,0);
 }

 console.log(calculateTotalRevenue(sales));

 //Task 4

 let employee = {name: "john Doe", salary: 5000, position: "Manager"};

 function updateSalary(employee, percentageIncrease) {
    return employee.salary = employee.salary *percentageIncrease;

 }
 console.log(updateSalary(employee, .1))
};