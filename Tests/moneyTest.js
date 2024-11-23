import { formatCurrency } from "../scripts/utils/money.js";

console.log('Test suite: formatCurrency');
// Basic cases
// test case
console.log('Convert cents into dollars');
if(formatCurrency(2095) === '20.95'){
  console.log('passed1');
} else {
  console.log('failed1');
}

// Edge cases
// test case
console.log('Works with 0');
if(formatCurrency(0) === '0.00'){
  console.log('passed2');
  // console.log(formatCurrency(0));   // 0.00
} else {
  console.log('failed2');
}

console.log('rounds up to the nearest cent');
if(formatCurrency(2000.5) === '20.01'){
  console.log('passed3');
  // console.log(formatCurrency(2000.5));   // 20.05
} else {
  console.log('failed3');
}

console.log('rounds up to the nearest cent');
if(formatCurrency(2000.4) === '20.00'){
  console.log('passed4');
  // console.log(formatCurrency(2000.4));   // 20.00
} else {
  console.log('failed4');
}