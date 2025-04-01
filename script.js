"use strict";
//////////////////////
/// DOM: element selection
const billamount = document.querySelector("#bill--amount");
const tipamount = document.querySelector("#tip--amount");
const submitBtn = document.querySelector(".submit--button");
const printTotal = document.querySelector("#result");

// the tip calculator function

const tipBill = function (bill, tip) {
  return (bill + bill * (tip / 100)).toFixed(2);
};

//const r = tipBill(23, 5);

//console.log(r);

//
console.log("from the dom:");
//console.log(tipBill(Number(billamount.value), Number(tipamount.value)));
// event handling after clicking the Calculate button
//
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const totBill = tipBill(Number(billamount.value), Number(tipamount.value));
  printTotal.textContent = `${totBill}`;
  console.log(totBill);
});
