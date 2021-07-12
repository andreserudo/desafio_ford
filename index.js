// entrada palavra: 1DG
// primeira cryptografia
// converter para numero
// segunda cryptogragia
// aplicar a hash(2*)

// vou ter o numero criptografado

const encriptyKey = (keyToCrypt) => {
  if (typeof keyToCrypt !== "string") {
    return null;
  }
  let numberInFirstCrypt = "";
  for (let index = 0; index < keyToCrypt.length; index += 1) {
    numberInFirstCrypt = `${numberInFirstCrypt}${keyToCrypt[index].charCodeAt(
      0
    )}`;
  }
  return numberInFirstCrypt;
};

const decryptKey = (keyToDescrypt) => {
  if (typeof keyToDescrypt !== "string") {
    return null;
  }
  let valueDecrypted = "";
  for (let index = 1; index < keyToDescrypt.length; index += 2) {
    console.log(`${keyToDescrypt[index - 1]}${keyToDescrypt[index]}`);
    stringToDecrypt = `${keyToDescrypt[index - 1]}${keyToDescrypt[index]}`;
    valueDecrypted = String.fromCharCode(stringToDecrypt);
  }
};

// *************** encrypt ***************

// teste de entrada do dado
if (encriptyKey(12) === null) {
  console.log("encrypt - checar se a entrada não é valida");
} else {
  console.log("encrypt - checar se a entrada é valida");
}

// // testes da primeira criptografi - aaplicação
if (encriptyKey("ABC") === "656667") {
  console.log("encrypt - gerar na primeira cryptografia de asc para numero");
} else {
  console.log("encrypt - nao funcionou");
}

// // *************** decrypt ***************

// teste de entrada do dado
if (decryptKey(12) === null) {
  console.log("decrypt - checar se entrada não é valida");
} else {
  console.log("decrypt - checar se a entrada é valida");
}

if (decryptKey("656667") === "ABC") {
  console.log("decrypt - gerar na primeira descritografia de asc para numero");
} else {
  console.log("decrypt - nao funcionou");
}
