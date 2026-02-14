if (localStorage.getItem("auth") !== "true") {
    window.location.href = "index.html";
}

const total = orders.length;
const completed = orders.filter(o => o.status === "completed").length;
const pending = orders.filter(o => o.status === "pending").length;
const revenue = orders
    .filter(o => o.status === "completed")
    .reduce((sum, o) => sum + o.amount, 0);

document.getElementById("orders").textContent = total;
document.getElementById("completed").textContent = completed;
document.getElementById("pending").textContent = pending;
document.getElementById("revenue").textContent = revenue.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' });

// Chart
new Chart(document.getElementById("salesChart"), {
    type: "bar",
    data: {
        labels: ["Completed", "Pending", "Cancelled"],
        datasets: [{
            label: "Orders",
            data: [
                completed,
                pending,
                orders.filter(o => o.status === "cancelled").length
            ]
        }]
    }
});



