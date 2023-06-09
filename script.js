//Dados iniciais 

// variável para mostrar questão atual
let currentQuestion = 0
let correctAnswers = 0
showQuestion()

//Evento do Botão Start
document.querySelector('.end button').addEventListener('click', resetEvent)

// Funcoes
function addName(){ //Capta o nome do usuário
    
  let nome = document.getElementById('name').value

  document.querySelector('.name').style.display = 'none'
  document.querySelector('.name2').style.display = 'block'

  document.querySelector('.name2').innerHTML = 'Let`s go ' + nome 
  document.getElementById('name').value = ""  
}

function showQuestion(){ //Traz as perguntas e respostas
  if(questions[currentQuestion]){
    let q = questions[currentQuestion] // Armazena a variável na variável q (só para nao ficar o nome grande)    

    document.querySelector('.end').style.display = 'none'
    document.querySelector('.questionArea').style.display = 'block'

    document.querySelector('.question').innerHTML = q.question

    let optionsHtml = ''
    for(let i in q.options){
      optionsHtml += `<div data-op="${i}" class="option" tabindex="0"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`
    }
    document.querySelector('.options').innerHTML = optionsHtml //inseri o item na tela

    //cria um loop para adiciona o evento click para nova questao
    document.querySelectorAll('.options .option').forEach(item =>{
      item.addEventListener('click', optionClickEvent)
    })     
  }else{
    //acabaram as questoes.
    finishQuiz()
  }
}

//Evento de click, ler o data-op e verifica se a resposta esta correta
function optionClickEvent(e){
    let clickedOption = parseInt(e.target.getAttribute('data-op'))

    if (questions[currentQuestion].answer === clickedOption) { // verifica se acertou e adiciona contador ++
      correctAnswers++      
    }
    currentQuestion++     
    showQuestion() //Vai para proxima questao
}

//Esconde area de questoes e mostra area de resultado
function finishQuiz(){
  let points = Math.floor((correctAnswers / questions.length) * 100) //Calcula a porcentagem de acerto.

//Adiciona as condições para porcentagem e cores para cada valor.
  if (points < 30) {
    document.querySelector('.endText1').innerHTML = 'Not good, try again!'
    document.querySelector('.textPct').style.color = '#cc0000'
  } else if(points >= 30 && points < 70){
    document.querySelector('.endText1').innerHTML = 'Very good!!!'
    document.querySelector('.textPct').style.color = '#f7ff00'
  }else if(points >= 70){
    document.querySelector('.endText1').innerHTML = 'Congratulations!!!!'
    document.querySelector('.textPct').style.color = '#228b22'
  }

  document.querySelector('.textPct').innerHTML = `Hit ${points}%`
  document.querySelector('.endText2').innerHTML = `You answered <span class='numQuest'>${questions.length}</span>  questions and got <span class='correctNum'>${correctAnswers}</span> right.`

  document.querySelector('.end').style.display = 'block'
  document.querySelector('.questionArea').style.display = 'none'  
}

//Zerando tudo no botão Start.
function resetEvent(){
  correctAnswers = 0
  currentQuestion = 0
  addName()
  showQuestion()

  //Reorganiza a aparencia da opção nome  
  document.querySelector('.name').style.display = 'block'
  document.querySelector('.name2').style.display = 'none'
  
  
}
