alert("Bem vindo ao portal de cadastramento de alunos! \n Pressione OK para continuar...")
var command = ""
var execute = 1
var aluno_array = []
while (execute == 1) {

  if (command == "") {
    command = prompt("Digite a opção desejada: \n add - Para inserir um novo aluno \n remove - Para remover um aluno \n display - Exibe a lista de alunos cadastrados \n quit - Encerrar o aplicativo")
  } else if (command == "remove") {
    remove_aluno = prompt("Digite o nome do aluno que deseja excluir:")
    index = aluno_array.indexOf(remove_aluno);
    aluno_array.splice(index, 1);
    command = ""
  } else if (command == "display") {
    alert("Alunos cadastrados: \n"+aluno_array.join('\n'))
    command = ""
  } else if (command == "quit") {
    execute = 0
    alert("Aplicativa encerrado")
  } else if (command == "add") {
    new_aluno = prompt("Digite o nome do novo aluno:")
    aluno_array.push(new_aluno)
    command = ""
  } else {
    alert("Opção invalida, pressione OK para voltar ao inicio.")
    command = ""
  }

}
