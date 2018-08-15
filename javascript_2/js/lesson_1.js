vida = 5


while (vida > 0) {
  vida --
  console.log('Você tomou 1 de dano, agora tem '+vida+' de vida');
  if (vida == 0) {
    console.log("Você morreu!");
  }
}

array = ['Brasil','Japão','EUA','Alemanhã']

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
