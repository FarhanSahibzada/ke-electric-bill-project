function generateBill() {
    let fisrt = document.getElementById("main").style.display = "none";
    document.getElementById("main2").style.display = "block";
    //  input values
    const customerName = document.getElementById('customerName').value;
    const units = parseFloat(document.getElementById('units').value);
    const chargesPerUnit = 16 ;
    const latePaymentSurcharge = 350;
    
    //  amounts
    const netAmountPayable = (units * chargesPerUnit).toFixed(2);
    const grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

    //  current month
    const currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    const currentMonth = monthNames[currentDate.getMonth()];

    //  results
    document.getElementById('billResult').innerHTML = `
        <div><strong>Customer Name:</strong> ${customerName}</div>
        <div><strong>Current Month:</strong> ${currentMonth}</div>
        <div><strong>Number of Units:</strong> ${units}</div>
        <div><strong>Charges per Unit:</strong> ${chargesPerUnit.toFixed(2)}</div>
        <div><strong>Net Amount Payable (within Due Date):</strong> Rs ${netAmountPayable}</div>
        <div><strong>Late Payment Surcharge:</strong> Rs ${latePaymentSurcharge.toFixed(2)}</div>
        <div><strong>Gross Amount Payable (after Due Date):</strong> Rs ${grossAmountPayable}</div>
    `;
}


