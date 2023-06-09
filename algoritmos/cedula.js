let FN = prompt("Cual es tu año de nacimiento?"); // prompt("Cual es tu año de nacimiento?");
let FA = 2023;
let EDAD;

EDAD = FA - FN;

if (EDAD > 17) {
  console.log("Es necesario que saques tu cedula de indentidad.");
} else {
  console.log("No necesitas sacar tu cedula");
};

