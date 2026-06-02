let total = 0;

function addExpense() {
    const title = document.getElementById("title").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (title === "" || isNaN(amount)) {
        alert("Please enter valid details");
        return;
    }

    const list = document.getElementById("expense-list");

    const li = document.createElement("li");
    li.innerHTML = `
        ${title} - ₹${amount}
        <button class="delete-btn" onclick="deleteExpense(this, ${amount})">Delete</button>
    `;

    list.appendChild(li);

    total += amount;
    document.getElementById("total").textContent = total;

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
}

function deleteExpense(button, amount) {
    button.parentElement.remove();

    total -= amount;
    document.getElementById("total").textContent = total;
}