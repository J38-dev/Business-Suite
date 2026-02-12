function exportCSV() {
    let csv = "ID,Status,Amount\n";

    orders.forEach(o => {
        csv += `${o.id},${o.status},${o.amount}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "sales.csv";
    link.click();
}
