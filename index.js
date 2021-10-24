document.addEventListener("DOMContentLoaded", function () {
    const btnAddRevenue = window.document.getElementById("add-revenue");
    btnAddRevenue.addEventListener("click", handleClickRev);
    const btnAddExpense = window.document.getElementById("add-expense");
    btnAddExpense.addEventListener("click", handleClickExp);
});

function setTwoNumberDecimal(event) {
    const t = event.value;
    event.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
}

function handleClickRev(event) {
    addRevenue();
}

function handleClickExp(event) {
    addExpense();
}

function addRevenue() {
    const revList = document.getElementById("revenue-list");
    const revInput = document.getElementById("revenue-input");
    const revText = revInput.value;

    while (revText == null || revText == "") {
        alert("Please enter the amount.");
        return false;
    }

    const rev = document.getElementsByName("rev");

    const revItem = document.createElement("li");

    if (document.getElementById("wages").checked == true) {
        revItem.textContent = '+' + revText + ' € ' + rev[0].value;
    } else if (document.getElementById("trades").checked == true) {
        revItem.textContent = '+' + revText + ' € ' + rev[1].value;
    } else if (document.getElementById("stocks").checked == true) {
        revItem.textContent = '+' + revText + ' € ' + rev[2].value;
    } else if (document.getElementById("others-rev").checked == true) {
        revItem.textContent = '+' + revText + ' € ' + rev[3].value;
    } else {
        revItem.textContent = '+' + revText + ' € ';
    }

    revItem.addEventListener("click", removeRevenue);
    revInput.value = "";
    revInput.focus();
    
    revList.appendChild(revItem);
    
    const arrMaxRev = [];
    
    for (let i = 0; i < revList.children.length; i++) {
        const numRev = parseFloat(revList.children[i].textContent); 
        arrMaxRev.push(numRev);
    }
    const maxNumRev = Math.max(...arrMaxRev);
    
    const maxRev = document.getElementById("max-revenue");
    maxRev.textContent = '+' + maxNumRev + ' €';

    const arrSumRev = [];

    for (let j = 0; j < revList.children.length; j++) {
        const arrRev = parseFloat(revList.children[j].textContent);
        arrSumRev.push(arrRev);
    }
    const sumArrRev = eval(arrSumRev.join("+"));

    const sumRev = document.getElementById("sum-revenue");
    sumRev.textContent = '+' + sumArrRev + ' €';
}

function addExpense() {
    const expList = document.getElementById("expense-list");
    const expInput = document.getElementById("expense-input");
    const expText = expInput.value;

    while (expText == null || expText == "") {
        alert("Please enter the amount.");
        return false;
    }
    
    const exp = document.getElementsByName("exp");

    const expItem = document.createElement("li");

    if (document.getElementById("repasts").checked == true) {
        expItem.textContent = '-' + expText + ' € ' + exp[0].value;
    } else if (document.getElementById("shopping").checked == true) {
        expItem.textContent = '-' + expText + ' € ' + exp[1].value;
    } else if (document.getElementById("amusements").checked == true) {
        expItem.textContent = '-' + expText + ' € ' + exp[2].value;
    } else if (document.getElementById("others-exp").checked == true) {
        expItem.textContent = '-' + expText + ' € ' + exp[3].value;
    } else {
        expItem.textContent = '-' + expText + ' € ';
    }

    expItem.addEventListener("click", removeExpense);
    expInput.value = "";
    expInput.focus();
    
    expList.appendChild(expItem);
    
    const arrMaxExp = [];
    
    for (let i = 0; i < expList.children.length; i++) {
        const numExp = parseFloat(expList.children[i].textContent);
        arrMaxExp.push(numExp);
    }
    const maxNumExp = Math.min(...arrMaxExp);
    
    const maxExp = document.getElementById("max-expense");
    maxExp.textContent = maxNumExp + ' €';

    const arrSumExp = [];

    for (let j = 0; j < expList.children.length; j++) {
        const arrExp = parseFloat(expList.children[j].textContent);
        arrSumExp.push(arrExp);
    }
    const sumArrExp = eval(arrSumExp.join("+"));
    
    const sumExp = document.getElementById("sum-expense");
    sumExp.textContent = sumArrExp + ' €';
}

function removeRevenue(event) {
    const revList = document.getElementById("revenue-list");
    revList.removeChild(event.target);
}

function removeExpense(event) {
    const expList = document.getElementById("expense-list");
    expList.removeChild(event.target);
}