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
    
    const list = [];
    
    for (let i = 0; i < revList.children.length; i++) {
        const num = parseFloat(revList.children[i].textContent); 
        list.push(num);
    }
    const max = Math.max(...list);
    
    const maxRev = document.getElementById("max-revenue");
    const oRevItem = document.createElement("li");
    oRevItem.textContent = '+' + max + ' €';

    maxRev.appendChild(oRevItem);

    const s = [];

    for (let i = 0; i < revList.children.length; i++) {
        const arr = parseFloat(revList.children[i].textContent);
        s.push(arr);
    }
    const sum = eval(s.join("+"));

    const sumRev = document.getElementById("sum-revenue");
    const sRevItem = document.createElement("li");
    sRevItem.textContent = '+' + sum + ' €';

    sumRev.appendChild(sRevItem);
}

function addExpense() {
    const expList = document.getElementById("expense-list");
    const expInput = document.getElementById("input");
    const expText = expInput.value;
    
    const expItem = document.createElement("li");
    expItem.textContent = '-' + expText + ' €';
    expItem.addEventListener("click", removeExpense);
    expInput.value = "";
    expInput.focus();
    
    expList.appendChild(expItem);
    
    const list = [];
    
    for (let i = 0; i < expList.children.length; i++) {
        const num = parseFloat(expList.children[i].textContent);
        list.push(num);
    }
    const max = Math.min(...list);
    
    const maxExp = document.getElementById("max-expense");
    const oExpItem = document.createElement("li");
    oExpItem.textContent = max + ' €';

    maxExp.appendChild(oExpItem);

    const s = [];

    for (let i = 0; i < expList.children.length; i++) {
        const arr = parseFloat(expList.children[i].textContent);
        s.push(arr);
    }
    const sum = eval(s.join("+"));
    
    const sumExp = document.getElementById("sum-expense");
    const sExpItem = document.createElement("li");
    sExpItem.textContent = sum + ' €';

    sumExp.appendChild(sExpItem);
}

function removeRevenue(event) {
    const revList = document.getElementById("revenue-list");
    revList.removeChild(event.target);
}

function removeExpense(event) {
    const expList = document.getElementById("expense-list");
    expList.removeChild(event.target);
}