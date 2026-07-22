// Array of 5 meals with their prices
const orders = [
    { meal: "Jollof Rice", price: 2500 },
    { meal: "Fried Rice", price: 3000 },
    { meal: "Chicken & Chips", price: 4500 },
    { meal: "Pepper Soup", price: 2000 },
    { meal: "Burger", price: 3500 }
];

let total = 0;

// Loop through each order
for (const order of orders) {
    console.log(`${order.meal}: ₦${order.price}`);
    total += order.price;
}

// Log the total
console.log(`Total: ₦${total}`);

// Calculate 10% service charge
const serviceCharge = total * 0.10;
const finalTotal = total + serviceCharge;

// Log the service charge and final total
console.log(`Service Charge (10%): ₦${serviceCharge}`);
console.log(`Final Total: ₦${finalTotal}`);