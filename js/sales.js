const table = document.getElementById("salesTable");

orders.forEach(o => {
    const row = `
        <tr>
            <td>${o.id}</td>
            <td>${o.status}</td>
            <td>$${o.amount}</td>
        </tr>
    `;
    table.innerHTML += row;
});
