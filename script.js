//Dados iniciais 

// variável para mostrar questão atual
let currentQuestion = 0
let correctAnswers = 0

showQuestion()

// Funcoes
function showQuestion(){
  if(questions[currentQuestion]){
    let q = questions[currentQuestion] // armazena a variável na variável q (só para nao ficar o nome grande)

    

    document.querySelector('.end').style.display = 'nome'
    document.querySelector('.questionArea').style.display = 'block'

    document.querySelector('.question').innerHTML = q.question
    let optionsHtml = ''
    for(let i in q.options){
      optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`
    }
    document.querySelector('.options').innerHTML = optionsHtml //inserir o iten na tela

    //cria um loop para adiciona o evento clinck para nova questao
    document.querySelectorAll('.options .option').forEach(item =>{
      item.addEventListener('click', optionClickEvent)
    })     
  }else{
    //acabaram as questoes.
    finishQuiz()
  }
}

//evento de click, ler o data-op e verifica se a resposta esta correta
function optionClickEvent(e){
    let clickedOption = parseInt(e.target.getAttribute('data-op'))

    if (questions[currentQuestion].answer === clickedOption) { // verifica se acertou e adiciona contador ++
      correctAnswers++
    }
    currentQuestion++
    showQuestion() //vai para proxima questao
}


// Esconde area de questoes e mostra area de rezultado
function finishQuiz(){
  document.querySelector('.end').style.display = 'block'
  document.querySelector('.questionArea').style.display = 'none'

}