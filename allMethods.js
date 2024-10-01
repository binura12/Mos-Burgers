// Burgers Object
const burgers = {
    B1001: { name: "Classic Burger (Large)", price: 750.00, discount: 0 },
    B1002: { name: "Classic Burger (Regular)", price: 1500.00, discount: 15 },
    B1003: { name: "Turkey Burger", price: 1600.00, discount: 0 },
    B1004: { name: "Chicken Burger (Large)", price: 1400.00, discount: 0 },
    B1005: { name: "Chicken Burger (Regular)", price: 800.00, discount: 20 },
    B1006: { name: "Cheese Burger (Large)", price: 1000.00, discount: 0 },
    B1007: { name: "Cheese Burger (Regular)", price: 600.00, discount: 0 },
    B1008: { name: "Bacon Burger", price: 650.00, discount: 15 },
    B1009: { name: "Shawarma Burger", price: 800.00, discount: 0 },
    B1010: { name: "Olive Burger", price: 1800.00, discount: 0 },
    B1012: { name: "Double-Cheese Burger", price: 1250.00, discount: 20 },
    B1013: { name: "Crispy Chicken Burger (Regular)", price: 1200.00, discount: 0 },
    B1014: { name: "Crispy Chicken Burger (Large)", price: 1600.00, discount: 10 },
    B1015: { name: "Paneer Burger", price: 900.00, discount: 0 }
};

// Login to Admin Form
function loginToAdminMenu() {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("psw").value;
    let errorLbl = document.getElementById("errorlbl");
    let errormsg;
    if (username == "admin" && password == "admin") {
        window.location.href = "adminMenu.html";
    } else {
        errorMsg = "Please enter correct username and password.";
        errorLbl.innerHTML = errorMsg;
    }
}

// Login To Customer Form
function loginToCashierMenu() {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("psw").value;
    let errorLbl = document.getElementById("errorlbl");
    let errormsg;
    if (username == "cashier" && password == "cashier") {
        window.location.href = "cashierMenu.html";
    } else {
        errorMsg = "Please enter valid username and password.";
        errorLbl.innerHTML = errorMsg;
    }
}

// Loading Add Customer Form
function addCustomerForm() {
    window.location.href = "addCustomer.html";
}

// Loading Search Customer Form
function searchCustomerForm() {
    window.location.href = "searchCustomer.html";
}

//Loading Place Order Form
function placeOrderForm() {
    window.location.href = "placeOrder.html";
}

// Add Customer Method
let customerCount = parseInt(localStorage.getItem('customerCount')) || 1;
let customers = JSON.parse(localStorage.getItem('customers')) || [];

document.getElementById("cusId").value = "C" + String(customerCount).padStart(4, '0');

function addCustomer() {
    let customerId = "C" + String(customerCount).padStart(4, '0');

    let fullname = document.getElementById("fNameTxt").value;
    let phoneNumber = document.getElementById("phnNumberTxt").value;
    let address = document.getElementById("addressTxt").value;
    let emailaddress = document.getElementById("emailTxt").value;

    let Customer = {
        id: customerId,
        name: fullname,
        phone: phoneNumber,
        address: address,
        email: emailaddress
    };

    customers.push(Customer);

    localStorage.setItem('customers', JSON.stringify(customers));

    customerCount++;
    localStorage.setItem('customerCount', customerCount);

    document.getElementById("cusId").value = "C" + String(customerCount).padStart(4, '0');

    clearFields();
    document.getElementById("cusId").value = "";
}

// Search Customer Method
function searchCustomer() {
    let searchId = document.getElementById("cusId2").value;
    let customers = JSON.parse(localStorage.getItem('customers')) || [];
    let customer = customers.find(cust => cust.id == searchId);

    if (customer) {
        document.getElementById("fNameTxt").value = customer.name;
        document.getElementById("phnNumberTxt").value = customer.phone;
        document.getElementById("addressTxt").value = customer.address;
        document.getElementById("emailTxt").value = customer.email;

    } else {
        alert("Customer not found");
        clearFields();
        document.getElementById("cusId2").value = "";
    }
}

// Update Customer Method
function updateCustomer() {
    let searchId = document.getElementById("cusId2").value;
    let customers = JSON.parse(localStorage.getItem('customers')) || [];
    let customerIndex = customers.findIndex(cust => cust.id == searchId);

    if (customerIndex != -1) {
        customers[customerIndex].name = document.getElementById("fNameTxt").value;
        customers[customerIndex].phone = document.getElementById("phnNumberTxt").value;
        customers[customerIndex].address = document.getElementById("addressTxt").value;
        customers[customerIndex].email = document.getElementById("emailTxt").value;

        localStorage.setItem('customers', JSON.stringify(customers));

        alert("Customer updated successfully!");
        clearFields();
        document.getElementById("cusId2").value = "";
    } else {
        alert("Customer not found");
    }
}

// Delete Customer Method
function deleteCustomer() {
    let searchId = document.getElementById("cusId2").value;
    let customers = JSON.parse(localStorage.getItem('customers')) || [];
    let customerIndex = customers.findIndex(cust => cust.id == searchId);

    if (customerIndex != -1) {
        customers.splice(customerIndex, 1);

        localStorage.setItem('customers', JSON.stringify(customers));
        clearFields();
        document.getElementById("cusId2").value = "";
        alert("Customer Deleted Successfully!");
    } else {
        alert("Customer not found");
    }
}

// Loading Burgers
function loadBurgers() {
    const allBurgersTable = document.getElementById("allBurgers");
    allBurgersTable.innerHTML = '';

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Name</th>
        <th>Price</th>
        <th>Discount</th>
    `;
    allBurgersTable.appendChild(headerRow);

    for (const [key, burger] of Object.entries(burgers)) {
        const row = document.createElement('tr');

        const price = burger.price;

        row.innerHTML = `
            <td>${burger.name}</td>
            <td>${price}/=</td>
            <td>${burger.discount}%</td>
            <td><button id="addButton" onclick="addToOrder">Add</button></td>
        `;

        allBurgersTable.appendChild(row);
    }
}

// Back To Home Method
function bachToHome() {
    window.location.href = "cashierMenu.html";
}

// Clear Fields Method
function clearFields() {
    document.getElementById("fNameTxt").value = "";
    document.getElementById("phnNumberTxt").value = "";
    document.getElementById("addressTxt").value = "";
    document.getElementById("emailTxt").value = "";
}