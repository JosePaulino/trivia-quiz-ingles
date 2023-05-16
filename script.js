//Dados iniciais 

// variável para mostrar questão atual
let currentQuestion = 0

showQuestion()

// Funcoes
function showQuestion(){
  if(questions[currentQuestion]){
    let q = questions[currentQuestion] // armazena a variável na variável q (só para nao ficar o nome grande)

    document.querySelector('.end').style.display = 'nome'
    document.querySelector('.questionArea').style.display = 'block'

    document.querySelector('.questions').innerHTML = q.question
    let optionsHtml = ''
    for(let i in q.options){
      optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`
    }
    document.querySelector('.options').innerHTML = optionsHtml


  }else{
    //acabaram as questoes.
  }
}