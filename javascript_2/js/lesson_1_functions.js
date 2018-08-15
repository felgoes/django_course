name = prompt("Qual seu nome?")
height = prompt("Qual sua altura?")
weight = prompt("Qual seu peso?")
age = prompt("Qual sua idade?")

function presentation(name = "Não definido", height = 0, weight = 0, age = 0) {
  console.log("Seu nome é "+name);
  console.log("Sua altura é "+height);
  console.log("Seu peso é "+weight);
  console.log("Sua idade é "+age);
}


presentation(name, height, weight, age)
