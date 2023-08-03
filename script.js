const prompt = require('prompt-sync')();
var array_livros = [];

do {
  console.log("Sistema de Cadastro de Livros");
  console.log("1 - Inserir Livro");
  console.log("2 - Excluir Livro");
  console.log("3 - Listar Livro");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Livro...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let titulo = prompt("Digite o título: ");
    let autor = prompt("Digite o autor: ");
    let editora = prompt("Digite o editora: ");
    let idioma = prompt("Digite o idioma: ");


    const livro = {
      codigo: codigo,
      titulo: titulo,
      autor: autor,
      editora: editora,
      idioma: idioma
    }
    inserir_livro(livro);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Livros...\n");
    let codigo = prompt("Digite o código do livro: ");
    excluir_livro();
  } else if (opcao == 3) {
    console.log("\n\nListando Livros...\n");
    listar_livro();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_livro(livro) {
  array_livros.push(livro);
}

function excluir_livro(codigo) {
  for (var i = 0; i <= array_livros.length; i++) {
    c = array_livros[i];
    if (codigo == c.codigo) {
      array_livros.splice(i,1);
    }
  }
}

function listar_livro() {
  for (i = 0; i <= array_livros.length; i++) {
    var titulodolivro = array_livros[i];
      console.log(titulodolivro.titulo);
      } 
}