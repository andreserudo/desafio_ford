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

// teste de entrada do dado
if (encriptyKey(12) === null) {
  console.log("checar se a entrada não é valida");
} else {
  console.log("checar se a entrada é valida");
}

// // testes da primeira criptografi - aaplicação
if (encriptyKey("ABC") === "656667") {
  console.log("gerar na primeira cryptografia de asc para numero");
} else {
  console.log("nao funcionou");
}
