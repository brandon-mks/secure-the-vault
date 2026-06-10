let code1;
code1 = 7 + 3;
console.log(code1);

let code2 = (12 * code1) / 3;
console.log(code2);

let code3 = (code2 % 3) * 39;
console.log(code3);

let message = "The vault has been secured. The combination is: ";
let codeA = code1 + "-" + code2 + "-" + code3;
console.log(codeA);

let codeB = `${code1}-${code2}-${code3}`;
console.log(codeB);

console.log(message, codeA, codeB);
