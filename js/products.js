// ================================
// LOAD PRODUCTS FROM LOCAL STORAGE
// ================================

let products = JSON.parse(localStorage.getItem("products")) || [];

// ================================
// RENDER PRODUCTS
// ================================

function renderProducts() {
    const table = document.getElementById("productTable");
    table.innerHTML = "";

    products.forEach((product, index) => {
        table.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>${product.stock}</td>
                <td>
                    <button onclick="editProduct(${index})">Edit</button>
                    <button onclick="deleteProduct(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// ================================
// ADD PRODUCT
// ================================

function addProduct() {
    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const stock = document.getElementById("productStock").value;

    if (!name || !price || !stock) {
        alert("Please fill all fields");
        return;
    }

    products.push({
        name,
        price: Number(price),
        stock: Number(stock)
    });

    saveProducts();
    renderProducts();

    // Clear inputs
    productName.value = "";
    productPrice.value = "";
    productStock.value = "";
}

// ================================
// DELETE PRODUCT
// ================================

function deleteProduct(index) {
    products.splice(index, 1);
    saveProducts();
    renderProducts();
}

// ================================
// EDIT PRODUCT
// ================================

function editProduct(index) {
    const product = products[index];

    const newName = prompt("Edit name:", product.name);
    const newPrice = prompt("Edit price:", product.price);
    const newStock = prompt("Edit stock:", product.stock);

    if (newName !== null) product.name = newName;
    if (newPrice !== null) product.price = Number(newPrice);
    if (newStock !== null) product.stock = Number(newStock);

    saveProducts();
    renderProducts();
}

// ================================
// SAVE TO LOCAL STORAGE
// ================================

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

// INITIAL LOAD
renderProducts();
