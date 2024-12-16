// faz a responsividade do botão pesquisar e lança toda base de dados
function pesquisar() {
    let section = document.getElementById('resultados-pesquisa')
console.log(section)

let resultados = ''

let campoPesquisa = document.getElementById('campo-pesquisa').value

// se o campoPesquisa for uma string sem nada 
if (!campoPesquisa) {
    section.innerHTML = 'Esse livro não está no repositório'
    return
}

// deixa todo o campo de pesquisa em letras minúsculas
campoPesquisa = campoPesquisa.toLowerCase()

// inica uma string vazia para armazenar os resultados
let resultado = '';
let título = '';
let descricao = '';
let tags = '';

// para cada dado dentro da lista de dados
for (let dado of dados) {
    título = dado.título.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    // se o título includes campoPesquisa
    // então faça ...
    if (título.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
    console.log(dado.título.includes(campoPesquisa))
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
                <h2>${dado.título}</h2>
                <p class="descrição-meta"> ${dado.descricao} </p>
                <a href= ${dado.link} target="_blank">Compre o livro aqui </a> 
        </div>
        `
    } 
}

if (!resultado) {
    section.innerHTML = '<p> Nada foi encontrado </p>'
}

// atribui os dados ao código HTML
    section.innerHTML =  resultados 
}

