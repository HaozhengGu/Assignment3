document.addEventListener("DOMContentLoaded", function () {
    const btnAddRevenue = window.document.getElementById("add-revenue");
    btnAddRevenue.addEventListener("click", handleClick1);
    const btnAddExpense = window.document.getElementById("add-expense");
    btnAddExpense.addEventListener("click", handleClick2);

    //const input = document.getElementById("input");
    //input.addEventListener("keydown", handleKeyDown);
});

function setTwoNumberDecimal(event) {
    const t = event.value;
    event.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
}

function handleClick1(event) {
    addRevenue();
}

function handleClick2(event) {
    addExpense();
}

/*
function handleKeyDown(event) {
    if (event.key === "Enter") {
        add();
    }
}
*/

function addRevenue() {
    const revList = document.getElementById("revenue-list");
    const revInput = document.getElementById("input");
    const revText = revInput.value;
    
    const revItem = document.createElement("li");
    revItem.textContent = '+' + revText + ' €';
    revItem.addEventListener("click", removeRevenue);
    revInput.value = "";
    revInput.focus();
    
    revList.appendChild(revItem);
}

function addExpense() {
    const expList = document.getElementById("expense-list");
    const expInput = document.getElementById("input");
    const expText = expInput.value;
    
    const expItem = document.createElement("li");
   
    expItem.textContent = '-' + expText + ' €';
    expItem.addEventListener("click", removeExpense);
    expInput.focus();
  
    expList.appendChild(expItem);
    expInput.value = "";
}

function removeRevenue(event) {
    const revList = document.getElementById("revenue-list");
    revList.removeChild(event.target);
}

function removeExpense(event) {
    const expList = document.getElementById("expense-list");
    expList.removeChild(event.target);
}

function getMaxRev(event) {
    //const maxRevenue = document.getElementById("max-revenue");
    const revList = document.getElementById("revenue-list");
    const mR = parseFloat(revList);
    const maxRev = Math.max(mR);
    const revText = maxRev.value;
    
    const revItem = document.createElement("li");
   
    revItem.textContent = revText;
}