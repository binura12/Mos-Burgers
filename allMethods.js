// Burgers Object
const burgers = {
    B1001: { name: "Classic Burger (Large)", price: 750.00, discount: 0, expDate: "2025-07-15" },
    B1002: { name: "Classic Burger (Regular)", price: 1500.00, discount: 15, expDate: "2025-08-25" },
    B1003: { name: "Turkey Burger", price: 1600.00, discount: 0 },
    B1004: { name: "Chicken Burger (Large)", price: 1400.00, discount: 0 },
    B1005: { name: "Chicken Burger (Regular)", price: 800.00, discount: 20, expDate: "2025-05-05" },
    B1006: { name: "Cheese Burger (Large)", price: 1000.00, discount: 0, expDate: "2025-09-05" },
    B1007: { name: "Cheese Burger (Regular)", price: 600.00, discount: 0, expDate: "2025-07-12" },
    B1008: { name: "Bacon Burger", price: 650.00, discount: 15, expDate: "2025-03-20" },
    B1009: { name: "Shawarma Burger", price: 800.00, discount: 0 },
    B1010: { name: "Olive Burger", price: 1800.00, discount: 0, expDate: "2024-07-05" },
    B1012: { name: "Double-Cheese Burger", price: 1250.00, discount: 20, expDate: "2024-07-05" },
    B1013: { name: "Crispy Chicken Burger (Regular)", price: 1200.00, discount: 0 },
    B1014: { name: "Crispy Chicken Burger (Large)", price: 1600.00, discount: 10 },
    B1015: { name: "Paneer Burger", price: 900.00, discount: 0, expDate: "2024-07-05" }
};

// Submarines Object
const submarines = {
    B1016: { name: "Crispy Chicken Submarine (Large)", price: 2000.00, discount: 0, expDate: "2025-07-15" },
    B1017: { name: "Crispy Chicken Submarine (Regular)", price: 1500.00, discount: 0, expDate: "2025-08-25" },
    B1018: { name: "Chicken Submarine (Large)", price: 1800.00, discount: 3 },
    B1019: { name: "Chicken Submarine (Regular", price: 1400.00, discount: 0 },
    B1020: { name: "Grinder Submarine", price: 2300.00, discount: 0, expDate: "2025-05-05" },
    B1021: { name: "Cheese Submarine", price: 2200.00, discount: 0, expDate: "2025-09-05" },
    B1022: { name: "Double Cheese n Chicken Submarine", price: 1900.00, discount: 16, expDate: "2025-07-12" },
    B1023: { name: "Special Horgie Submarine", price: 2800.00, discount: 0, expDate: "2025-03-20" },
    B1024: { name: "MOS Special Submarine", price: 3000.00, discount: 0 }
};

//Fries Object
const Fries = {
    B1025: { name: "Steak Fries (Large)", price: 1200.00, discount: 0, expDate: "2025-07-15" },
    B1026: { name: "Steak Fries (Medium)", price: 600.00, discount: 0, expDate: "2025-08-25" },
    B1027: { name: "French Fries (Large)", price: 800.00, discount: 0, expDate: "2025-05-05" },
    B1028: { name: "French Fries (Medium)", price: 650.00, discount: 0, expDate: "2025-05-05" },
    B1029: { name: "French Fries (Small)", price: 450.00, discount: 0, expDate: "2025-05-05" },
    B1030: { name: "Sweet Potato Fries (Large)", price: 600.00, discount: 0, expDate: "2025-09-05" }
};

//Pasta Obeject
const pasta = {
    B1031: { name: "Chicken n Cheese Pasta", price: 1600.00, discount: 15, expDate: "2025-07-15" },
    B1032: { name: "Chicken Penne Pasta", price: 1700.00, discount: 0, expDate: "2025-08-25" },
    B1033: { name: "Ground Turkey Pasta Bake", price: 2900.00, discount: 10, expDate: "2025-05-15" },
    B1034: { name: "Creamy Shrimp Pasta", price: 2000.00, discount: 0, expDate: "2025-05-20" },
    B1035: { name: "Lemon Butter Pasta", price: 1950.00, discount: 0, expDate: "2025-07-10" },
    B1036: { name: "Tagliatelle Pasta", price: 2400.00, discount: 1, expDate: "2025-03-05" },
    B1037: { name: "Baked Ravioli ", price: 2000.00, discount: 1, expDate: "2025-11-05" }
};

//Chicken Object
const chicken = {
    B1038: { name: "Fried Chicken (Small)", price: 1200.00, discount: 0, expDate: "2025-07-15" },
    B1039: { name: "Fried Chicken (Regular)", price: 2300.00, discount: 10, expDate: "2025-08-25" },
    B1040: { name: "Fried Chicken (Large)", price: 3100.00, discount: 5, expDate: "2025-05-15" },
    B1041: { name: "Hot Wings (Large)", price: 2400.00, discount: 0, expDate: "2025-05-20" },
    B1042: { name: "Devilled Chicken (Large)", price: 900.00, discount: 0, expDate: "2025-07-10" },
    B1043: { name: "BBQ Chicken (Regular)", price: 2100.00, discount: 0, expDate: "2025-03-05" }
};

//Beverages Object
const beverages = {
    B1044: { name: "Pepsi (330ml)", price: 990.00, discount: 5, expDate: "2025-07-15" },
    B1045: { name: "Coca-Cola (330ml)", price: 1230.00, discount: 0, expDate: "2025-08-25" },
    B1046: { name: "Sprite (330ml)", price: 1500.00, discount: 3, expDate: "2025-05-15" },
    B1047: { name: "Mirinda (330ml)", price: 850.00, discount: 7, expDate: "2025-05-20" }
};

// All Items Object
const allItems = {
    B1001: { name: "Classic Burger (Large)", price: 750.00, discount: 0, expDate: "2025-07-15" },
    B1002: { name: "Classic Burger (Regular)", price: 1500.00, discount: 15, expDate: "2025-08-25" },
    B1003: { name: "Turkey Burger", price: 1600.00, discount: 0 },
    B1004: { name: "Chicken Burger (Large)", price: 1400.00, discount: 0 },
    B1005: { name: "Chicken Burger (Regular)", price: 800.00, discount: 20, expDate: "2025-05-05" },
    B1006: { name: "Cheese Burger (Large)", price: 1000.00, discount: 0, expDate: "2025-09-05" },
    B1007: { name: "Cheese Burger (Regular)", price: 600.00, discount: 0, expDate: "2025-07-12" },
    B1008: { name: "Bacon Burger", price: 650.00, discount: 15, expDate: "2025-03-20" },
    B1009: { name: "Shawarma Burger", price: 800.00, discount: 0 },
    B1010: { name: "Olive Burger", price: 1800.00, discount: 0, expDate: "2024-07-05" },
    B1012: { name: "Double-Cheese Burger", price: 1250.00, discount: 20, expDate: "2024-07-05" },
    B1013: { name: "Crispy Chicken Burger (Regular)", price: 1200.00, discount: 0 },
    B1014: { name: "Crispy Chicken Burger (Large)", price: 1600.00, discount: 10 },
    B1015: { name: "Paneer Burger", price: 900.00, discount: 0, expDate: "2024-07-05" },
    B1016: { name: "Crispy Chicken Submarine (Large)", price: 2000.00, discount: 0, expDate: "2025-07-15" },
    B1017: { name: "Crispy Chicken Submarine (Regular)", price: 1500.00, discount: 0, expDate: "2025-08-25" },
    B1018: { name: "Chicken Submarine (Large)", price: 1800.00, discount: 3 },
    B1019: { name: "Chicken Submarine (Regular", price: 1400.00, discount: 0 },
    B1020: { name: "Grinder Submarine", price: 2300.00, discount: 0, expDate: "2025-05-05" },
    B1021: { name: "Cheese Submarine", price: 2200.00, discount: 0, expDate: "2025-09-05" },
    B1022: { name: "Double Cheese n Chicken Submarine", price: 1900.00, discount: 16, expDate: "2025-07-12" },
    B1023: { name: "Special Horgie Submarine", price: 2800.00, discount: 0, expDate: "2025-03-20" },
    B1024: { name: "MOS Special Submarine", price: 3000.00, discount: 0 },
    B1025: { name: "Steak Fries (Large)", price: 1200.00, discount: 0, expDate: "2025-07-15" },
    B1026: { name: "Steak Fries (Medium)", price: 600.00, discount: 0, expDate: "2025-08-25" },
    B1027: { name: "French Fries (Large)", price: 800.00, discount: 0, expDate: "2025-05-05" },
    B1028: { name: "French Fries (Medium)", price: 650.00, discount: 0, expDate: "2025-05-05" },
    B1029: { name: "French Fries (Small)", price: 450.00, discount: 0, expDate: "2025-05-05" },
    B1030: { name: "Sweet Potato Fries (Large)", price: 600.00, discount: 0, expDate: "2025-09-05" },
    B1031: { name: "Chicken n Cheese Pasta", price: 1600.00, discount: 15, expDate: "2025-07-15" },
    B1032: { name: "Chicken Penne Pasta", price: 1700.00, discount: 0, expDate: "2025-08-25" },
    B1033: { name: "Ground Turkey Pasta Bake", price: 2900.00, discount: 10, expDate: "2025-05-15" },
    B1034: { name: "Creamy Shrimp Pasta", price: 2000.00, discount: 0, expDate: "2025-05-20" },
    B1035: { name: "Lemon Butter Pasta", price: 1950.00, discount: 0, expDate: "2025-07-10" },
    B1036: { name: "Tagliatelle Pasta", price: 2400.00, discount: 1, expDate: "2025-03-05" },
    B1037: { name: "Baked Ravioli ", price: 2000.00, discount: 1, expDate: "2025-11-05" },
    B1038: { name: "Fried Chicken (Small)", price: 1200.00, discount: 0, expDate: "2025-07-15" },
    B1039: { name: "Fried Chicken (Regular)", price: 2300.00, discount: 10, expDate: "2025-08-25" },
    B1040: { name: "Fried Chicken (Large)", price: 3100.00, discount: 5, expDate: "2025-05-15" },
    B1041: { name: "Hot Wings (Large)", price: 2400.00, discount: 0, expDate: "2025-05-20" },
    B1042: { name: "Devilled Chicken (Large)", price: 900.00, discount: 0, expDate: "2025-07-10" },
    B1043: { name: "BBQ Chicken (Regular)", price: 2100.00, discount: 0, expDate: "2025-03-05" },
    B1044: { name: "Pepsi (330ml)", price: 990.00, discount: 5, expDate: "2025-07-15" },
    B1045: { name: "Coca-Cola (330ml)", price: 1230.00, discount: 0, expDate: "2025-08-25" },
    B1046: { name: "Sprite (330ml)", price: 1500.00, discount: 3, expDate: "2025-05-15" },
    B1047: { name: "Mirinda (330ml)", price: 850.00, discount: 7, expDate: "2025-05-20" }
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

//Loading saved orders
function savedOrders(){
    window.location.href = "savedOrders.html";
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
    clearFields();
    document.getElementById("cusId").value = "C" + String(customerCount).padStart(4, '0');
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
    const allFoodsTable = document.getElementById("allfoods");
    allFoodsTable.innerHTML = '';

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Name</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Exp.Date</th>
    `;
    allFoodsTable.appendChild(headerRow);

    for (const [key, burger] of Object.entries(burgers)) {
        const row = document.createElement('tr');

        const price = burger.price;

        row.innerHTML = `
            <td>${burger.name}</td>
            <td>${price}/=</td>
            <td>${burger.discount}%</td>
            <td>${burger.expDate || 'N/A'}</td>
            <td><button id="addButton" onclick="addToOrder('${burger.name}')">Add</button></td>
        `;
        allFoodsTable.appendChild(row);
    }
}

// Loading Submarines
function loadSubmarines() {
    const allFoodsTable = document.getElementById("allfoods");
    allFoodsTable.innerHTML = '';

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Name</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Exp.Date</th>
    `;
    allFoodsTable.appendChild(headerRow);

    for (const [key, Submarine] of Object.entries(submarines)) {
        const row = document.createElement('tr');

        const price = Submarine.price;

        row.innerHTML = `
            <td>${Submarine.name}</td>
            <td>${price}/=</td>
            <td>${Submarine.discount}%</td>
            <td>${Submarine.expDate || 'N/A'}</td>
            <td><button id="addButton" onclick="addToOrder('${Submarine.name}')">Add</button></td>
        `;
        allFoodsTable.appendChild(row);
    }
}

// Loading Fries
function loadFries() {
    const allFoodsTable = document.getElementById("allfoods");
    allFoodsTable.innerHTML = '';

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Name</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Exp.Date</th>
    `;
    allFoodsTable.appendChild(headerRow);

    for (const [key, Frie] of Object.entries(Fries)) {
        const row = document.createElement('tr');

        const price = Frie.price;

        row.innerHTML = `
            <td>${Frie.name}</td>
            <td>${price}/=</td>
            <td>${Frie.discount}%</td>
            <td>${Frie.expDate || 'N/A'}</td>
            <td><button id="addButton" onclick="addToOrder('${Frie.name}')">Add</button></td>
        `;
        allFoodsTable.appendChild(row);
    }
}

// Load Pasta
function loadPasta() {
    const allFoodsTable = document.getElementById("allfoods");
    allFoodsTable.innerHTML = '';

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Name</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Exp.Date</th>
    `;
    allFoodsTable.appendChild(headerRow);

    for (const [key, Pasta] of Object.entries(pasta)) {
        const row = document.createElement('tr');

        const price = Pasta.price;

        row.innerHTML = `
            <td>${Pasta.name}</td>
            <td>${price}/=</td>
            <td>${Pasta.discount}%</td>
            <td>${Pasta.expDate || 'N/A'}</td>
            <td><button id="addButton" onclick="addToOrder('${Pasta.name}')">Add</button></td>
        `;
        allFoodsTable.appendChild(row);
    }
}

// Load Chicken
function loadChickens() {
    const allFoodsTable = document.getElementById("allfoods");
    allFoodsTable.innerHTML = '';

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Name</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Exp.Date</th>
    `;
    allFoodsTable.appendChild(headerRow);

    for (const [key, Chicken] of Object.entries(chicken)) {
        const row = document.createElement('tr');

        const price = Chicken.price;

        row.innerHTML = `
            <td>${Chicken.name}</td>
            <td>${price}/=</td>
            <td>${Chicken.discount}%</td>
            <td>${Chicken.expDate || 'N/A'}</td>
            <td><button id="addButton" onclick="addToOrder('${Chicken.name}')">Add</button></td>
        `;
        allFoodsTable.appendChild(row);
    }
}

// Load Beverages
function loadBeverages() {
    const allFoodsTable = document.getElementById("allfoods");
    allFoodsTable.innerHTML = '';

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Name</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Exp.Date</th>
    `;
    allFoodsTable.appendChild(headerRow);

    for (const [key, Beverages] of Object.entries(beverages)) {
        const row = document.createElement('tr');

        const price = Beverages.price;

        row.innerHTML = `
            <td>${Beverages.name}</td>
            <td>${price}/=</td>
            <td>${Beverages.discount}%</td>
            <td>${Beverages.expDate || 'N/A'}</td>
            <td><button id="addButton" onclick="addToOrder('${Beverages.name}')">Add</button></td>
        `;
        allFoodsTable.appendChild(row);
    }
}

// Load All Items
function loadAllItems() {
    const allFoodsTable = document.getElementById("allfoods");
    allFoodsTable.innerHTML = '';

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Name</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Exp.Date</th>
    `;
    allFoodsTable.appendChild(headerRow);

    for (const [key, AllItems] of Object.entries(allItems)) {
        const row = document.createElement('tr');

        const price = AllItems.price;

        row.innerHTML = `
            <td>${AllItems.name}</td>
            <td>${price}/=</td>
            <td>${AllItems.discount}%</td>
            <td>${AllItems.expDate || 'N/A'}</td>
            <td><button id="addButton" onclick="addToOrder('${AllItems.name}')">Add</button></td>
        `;
        allFoodsTable.appendChild(row);
    }
}

// Place Order
function addToOrder(itemname) {
    const orderTableBody = document.getElementById("orderSection").getElementsByTagName("tbody")[0];

    let existingRow = Array.from(orderTableBody.rows).find(row => row.cells[0].innerText == itemname);

    if (existingRow) {
        let quantityInput = existingRow.cells[1].getElementsByTagName("input")[0];
        quantityInput.value = parseInt(quantityInput.value) + 1;
    } else {
        const newRow = orderTableBody.insertRow();

        newRow.innerHTML = `
            <td>${itemname}</td>
            <td><input type="number" value="1" min="1" onchange="updatePriceSection()" id="quantity"/></td>
            <td><button onclick="removeItem(this)" id="removeButton">Remove</button></td>
        `;
    }
    updatePriceSection();
}

// Removing item from the order section
function removeItem(button) {
    const orderTableBody = document.getElementById("orderSection").getElementsByTagName("tbody")[0];
    orderTableBody.deleteRow(button.parentElement.parentElement.rowIndex - 1);
    updatePriceSection();
}

// Update Pricing Section
function updatePriceSection() {
    const orderTableBody = document.getElementById("orderSection").getElementsByTagName("tbody")[0];

    let totalValue = 0;
    let discountValue = 0;

    Array.from(orderTableBody.rows).forEach(row => {
        const itemName = row.cells[0].textContent;
        const quantity = +row.cells[1].getElementsByTagName("input")[0].value;

        const item = Object.values(allItems).find(item => item.name === itemName);
        if (item && quantity > 0) {
            const itemPrice = item.price * quantity;
            const itemDiscount = item.discount ? (item.discount / 100) * itemPrice : 0;

            totalValue += itemPrice;
            discountValue += itemDiscount;
        }
    });

    const finalValue = totalValue - discountValue;

    document.getElementById("totalValue").innerText = totalValue.toFixed(2) + '/=';
    document.getElementById("discountValue").innerText = discountValue.toFixed(2) + '/=';
    document.getElementById("FinalValue").innerText = finalValue.toFixed(2) + '/=';
}

// Generate Random Bill Id
function generateBillId() {
    const prefix = 'B';
    const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return prefix + randomNum;
}

// Back To Home Method
function bachToHome() {
    window.location.href = "cashierMenu.html";
}

function logout(){
    window.location.href = "cashier.html";
}

// Clear Fields Method
function clearFields() {
    document.getElementById("fNameTxt").value = "";
    document.getElementById("phnNumberTxt").value = "";
    document.getElementById("addressTxt").value = "";
    document.getElementById("emailTxt").value = "";
}

// save orders in oreders object
function printBill(){
    let CustomerNAME = document.getElementById("cusName").value;
    let billId = document.getElementById("billId").value;
    let orderSection = document.getElementById("orderSection").getElementsByTagName("tbody")[0];
    let itemNames = Array.from(orderSection.children)
        .map(item => item.cells[0].innerText.trim())
        .join(", ");

    itemNames = cleanItemNames(itemNames);

    let discountValue = parseFloat(document.getElementById("discountValue").textContent);
    let finalValue = parseFloat(document.getElementById("FinalValue").textContent);

    let order = {
        billid : billId,
        itemName : itemNames,
        customerName : CustomerNAME,
        discountValue : discountValue,
        finalValue : finalValue
    };

    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    document.getElementById("cusName").value = "";
    document.getElementById("billId").value = generateBillId();
    orderItems.innerHTML = "";
    document.getElementById("totalValue").textContent = "0.00";
    document.getElementById("discountValue").textContent = "0.00";
    document.getElementById("FinalValue").textContent = "0.00";
}

//clear all items by one click
function clearOrder(){
    document.getElementById("orderItems").innerHTML = "";
    document.getElementById("totalValue").textContent = "0.00";
    document.getElementById("discountValue").textContent = "0.00";
    document.getElementById("FinalValue").textContent = "0.00";
}

// remove quantity and remove text
function cleanItemNames(itemNameString) {
    return itemNameString
        .split(',')
        .map(item => item.replace(/Item Name|Quantity|Remove/g, '').trim())
        .filter(item => item !== '')
        .join(', ');
}

function searchItem() {
    let searchBar = document.getElementById("searchBar").value.trim().toLowerCase();
    let allFoodsTable = document.getElementById("allfoods");

    allFoodsTable.innerHTML = "";

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Name</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Exp.Date</th>
    `;

    allFoodsTable.appendChild(headerRow);
    let foundItems = Object.values(allItems).filter(item => item.name.toLowerCase().includes(searchBar));

    if (foundItems.length > 0) {
        foundItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.price}/=</td>
                <td>${item.discount}%</td>
                <td>${item.expDate || 'N/A'}</td>
                <td><button id="addButton" onclick="addToOrder('${item.name}')">Add</button></td>
            `;
            allFoodsTable.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 5;
        cell.textContent = "No items found";
        row.appendChild(cell);
        allFoodsTable.appendChild(row);
    }
}

// Load Saved Orders
// function loadOrders() { 
//     const orders = JSON.parse(localStorage.getItem('orders')) || [];
//     const tbody = document.getElementById('savedOrdersBody');
//     tbody.innerHTML = ""; 

//     orders.forEach((order) => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td id="customerName">${order.customerName}</td>
//             <td id="BillId">${order.billid}</td>
//             <td><button id="viewButton" onclick="viewOrder('${order.billId}')">View -></button></td>
//         `;
//         tbody.appendChild(row);
//     });
// }