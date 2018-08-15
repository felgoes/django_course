alert("Bem vindo a central de perguntas! Pressione OK para continuar...")


anwser_1_first = prompt("Qual o seu primeiro nome?")
anwser_1_last = prompt("Qual o seu sobrenome?")
anwser_2 = prompt("Qual sua idade?")
anwser_3 = prompt("Qual sua altura?")
anwser_4 = prompt("Você possui algum animal de estimação?")


first_split = anwser_1_first.substring(0,1)
second_split = anwser_1_last.substring(0,1)

spy_counter = 0

console.log(first_split + second_split)

if (first_split === second_split) {
  spy_counter ++
  console.log("passou anwser_1")
}

if (anwser_2 >= 20 && anwser_2 <= 30) {
  spy_counter ++
  console.log("passou anwser_2")
}

if (anwser_3 >= 170) {
  spy_counter ++
  console.log("passou anwser_3");
}

if (anwser_4 === "Sim" || anwser_4 === "sim" || anwser_4 === "Yes" || anwser_4 === "yes") {
  pet_anwser = prompt("Qual o nome do seu pet favorito?")
  if (pet_anwser.slice(-1) === "y") {
    spy_counter ++
    console.log("passou anwser_4");
  }
}

if (spy_counter === 4) {
  console.log("Você é um espião!");
}
